import {useState} from 'react'
import { Helmet } from "react-helmet";
import ReturnNav from "./components/ReturnNav";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Header from "./components/Header";
import Styles from "./styles/product.module.scss";
import Loader from './components/Loader'
import ReactMarkdown from 'react-markdown'

const PRODUCT_QUERY = gql`
  query Product($slug: String!) {
    products(where: { slug: $slug }) {
      id
      name
      details
      directions
      bannerImage
      slug
      productData{
        html
      }
    }
  }
`;




const Product = () => {

  let { slug } = useParams();

  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: { slug }
  });


  if (loading) return <Loader sz="lg" />
  if (error) return <p>There was an error: {error}</p>;



   
  return (
    <main>
      {data &&
        data.products.map(
          ({ id, name, bannerImage, details, directions, productData, slug }) => {
            const markup = {__html: productData.html}
          return (
            <main key={`product-${id}`}>
              <Helmet>
                <title>Fundamental Technology | {name} </title>
              </Helmet>
              <Header title={name} img={bannerImage.url} />
              <header className={Styles.productHeader}>
                  <section className={Styles.productDetails}>
                    <h2>{name}</h2>
                    <ReactMarkdown>{details}</ReactMarkdown>                 
                  </section>
              </header>
              <main className={Styles.productDetails}>
                <h2>Product Data</h2>
                {productData ? 
                  <section dangerouslySetInnerHTML={markup}></section>
                  : null}
                {
                  directions ? <ReactMarkdown>{directions}</ReactMarkdown> : null
                }
              </main>
              <ReturnNav />
            </main>
          )}
        )}
    </main>
  );
};

export default Product;
