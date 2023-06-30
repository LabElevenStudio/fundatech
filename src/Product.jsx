import {useState} from 'react'
import { Helmet } from "react-helmet";
import ReturnNav from "./components/ReturnNav";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Header from "./components/Header";
import Styles from "./styles/product.module.scss";
import Loader from './components/Loader'

const PRODUCT_QUERY = gql`
  query Product($slug: String!) {
    products(where: { slug: $slug }) {
      id
      name
      description
      quantity
      price
      bannerImage
      slug
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
          ({ id, name, price, quantity, bannerImage, description, slug }) => (
            <main key={`product-${id}`}>
              <Helmet>
                <title>Fundamental Technology | {name} </title>
              </Helmet>
              <Header title={name} img={bannerImage.url} />
              <header className={Styles.productHeader}>
                <div
                  className={Styles.productImage}
                  role="image"
                  style={{
                    backgroundImage: `url(${bannerImage.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <section className={Styles.productDetails}>
                  <h2>{name}</h2>
                  <p>{description}</p>                 
                </section>
              </header>
              <main className={Styles.productDescription}>
                <p>{description}</p>
              </main>
              <ReturnNav />
            </main>
          )
        )}
    </main>
  );
};

export default Product;
