import {useState} from 'react'
import { Helmet } from "react-helmet";
import ReturnNav from "./components/ReturnNav";
import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import Header from "./components/Header";
import Styles from "./styles/product.module.scss";


import { useContext } from "react";
import AuthContext from "./stores/AuthContext";
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';
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

  const [itemQuantity, setItemQuantity] = useState(1)


  const { user, login, authReady } = useContext(AuthContext);

  const {addItem} = useShoppingCart()

  function decreaseQuantity() {
    if(itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1)
    }
  }


  function increaseQuantity() {
    setItemQuantity(itemQuantity + 1)
  }

  

  if (loading) return <Loader sz="lg" />
  if (error) return <p>There was an error: {error}</p>;

  const product = data.products.map((product) => product)

  function addToCart (){
    console.log("added")
    addItem(product, {count: itemQuantity})
    setItemQuantity(1)
  }


   
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
                    <span style={{color: "forestgreen" }}>NGN</span> {price}
                  </small>
                  <p id={Styles.quantity}>
                    {" "}
                    quantity available:{" "}
                    {quantity <= 0 || quantity === null
                      ? "out of stock"
                      : quantity}
                  </p>
                  <section className={Styles.quantityCounter}>
                    <button id={Styles.increaseBtn} onClick={() => decreaseQuantity()}>
                      -
                    </button>
                    <div id={Styles.quantity}>
                      <p>{itemQuantity}</p>
                    </div>
                    <button id={Styles.decraseBtn} onClick={() => increaseQuantity()}>
                      +
                    </button>
                  </section>
                  {authReady && (
                    <>
                      {user && (
                        <button id={Styles.addToCartBtn} onClick={() => addToCart()}>
                          Add To cart
                        </button>
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
