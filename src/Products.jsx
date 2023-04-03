import { Helmet } from "react-helmet";
import ReturnNav from "./components/ReturnNav";
import Product from "./components/Product"
import "./styles/products.module.scss";
import { Route, Routes, Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const CATEGORY_QUERY = gql`
  query Category {
    categories {
      id
      slug
      name
      description
      products {
        id
        name
        slug
        description
        price
      }
    }
  }
`;

const Products = () => {

  const productSlugs = [
    "specialties",
    "emulsion",
    "industrial-and-marine",
    "enamel",
    "road-marking",
    "textured-paints",
  ];

  const { data, loading, error } = useQuery(CATEGORY_QUERY);


    if (loading) return <h2>Loading ...</h2>
    if (error) return <p>There was an error {error}</p>

    // console.log(data.categoriees)

  return (
    <>
          <main>
              <ul>
                  {data && data.categories.map(({ id, slug, name, description, products }) => {
                      return (
                          <li key={`categories-${id}`}>
                            <nav>
                                <h3>{name}</h3>
                                <Link to={`/products/category/${slug}`}>View More</Link>
                              </nav>
                              {
                                  products.map((prod) => (
                                      <Product prod={prod} />
                                  ))
                              }
                         </li>
                      )
                  })}
              </ul>
























        {/* <ul>
          {data && data.categories.map(({ name, id }) => {
            return (
              <li key={`category-${id}`}>
                <nav>
                  <h2>{name}</h2>
                  <Link to={`products/category/${id}`}>View more</Link>
                </nav>
                <section> */}
              {/* <div>
                  {data && data.categories.map(({ name, id }) => {
                      return (
                        <>
                          <nav key={`category-${id}`}>
                            <h3>{name}</h3>
                            <Link to={`products/category/${id}`}>
                              view more
                            </Link>
                          </nav>
                          {productSlugs.map((slug) => (
                            <section key={slug}>
                              <Product slug={slug} />
                            </section>
                          ))}
                        </>
                      );
                  })}
                 
                  </div> */}
                {/* </section>
              </li>
            );
          })}
        </ul> */}

        <ReturnNav />
      </main>
    </>
  );
};

export default Products;
