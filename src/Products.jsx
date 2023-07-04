import { Helmet } from "react-helmet";
import ReturnNav from "./components/ReturnNav";
import ProductCard from "./components/ProductCard";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Styles from "./styles/products.module.scss";
import Header from './components/Header'
import Loader from './components/Loader'


const CATEGORY_QUERY = gql`
  query Category {
    categories {
      id
      slug
      name
      products {
        id
        name
        slug
      }
    }
  }
`;

const Products = () => {
  const { data, loading, error } = useQuery(CATEGORY_QUERY);

  if (loading) return <Loader sz="md" />
  if (error) return <p>There was an error {error}</p>;

  return (
    <main>
      <Helmet>
        <title>Fudamental Technology | Products</title>
      </Helmet>
      <Header title="Products" img="./images/headers/product-hero.png" />"
      <ul className={Styles.catWrapper}>
        {data &&
          data.categories.map(({ id, slug, name, products }) => {
            return (
              <li key={`categories-${id}`} className={Styles.category}>
                <nav className={Styles.catNav}>
                  <h3>{name}</h3>
                  <Link to={`/category/${slug}`}>View More</Link>
                </nav>
                <section className={Styles.productList}>
                  {products.slice(0, 3).map((prod) => {
                    // console.log('prod', prod.slug)
                    const { id, slug } = prod
                    return (
                      <Link
                        key={`product-${id}`}
                        to={`/product/${slug}`}
                      >
                        <ProductCard prod={prod} />
                      </Link>
                    )
                  })}
                </section>
              </li>
            );
          })}
      </ul>

      <ReturnNav />
    </main>
  );
};

export default Products;
