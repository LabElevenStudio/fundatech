import {useState} from 'react'
import { Helmet } from "react-helmet";
import ReturnNav from "./components/ReturnNav";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Header from "./components/Header";
import AddItemBtn from './components/AddItemBtn'
import CallBtn from './components/CallButton'
import Styles from "./styles/product.module.scss";

import { useContext } from "react";
import AuthContext from "./stores/AuthContext";

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

  const [outOfStock, setOutOfStock] = useState(false)

  const { user, login, authReady } = useContext(AuthContext);

  let { slug } = useParams();

  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: { slug }
  });

  if (loading) return <p>...Loading</p>;
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
                  <small>
                    <span>NGN</span> {price}
                  </small>
                  <p id={Styles.quantity}>
                    {" "}
                    quantity available:{" "}
                    {quantity <= 0 || quantity === null
                      ? "out of stock"
                      : quantity}
                  </p>
                  {authReady && (
                    <>
                      {user && (
                        <AddItemBtn
                          id={id}
                          price={price}
                          img={bannerImage.url}
                          name={name}
                          slug={slug}
                        />
                      )}
                      {!user && (
                        <p id={Styles.info}>
                          To purchase an item, you have to sign in
                        </p>
                      )}
                    </>
                  )}
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
