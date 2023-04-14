import { Link, useParams } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { useQuery, gql } from "@apollo/client";
import ReturnNav from './components/ReturnNav'
import Header from './components/Header'
import Styles from './styles/category.module.scss'



const CATEGORY_QUERY = gql`
  query Category($slug: String!) {
    categories(where: { slug: $slug }) {
      id
      slug
      name
      description
      banner
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


const Category = () => {

    let { slug } = useParams();

    const { data, loading, error } = useQuery(CATEGORY_QUERY, {
      variables: { slug },
    });



    if (loading) return <p>...Loading</p>;
    if (error) return <p>There was an error: {error}</p>;
  

    
    return (
      <main>
        {
          data && data.categories.map(({ id, name, banner,  products }) => {

            

            return (
              <section key={`cat-${id}`}>
                <Helmet>
                  <title>Fundamental | {name}</title>
                </Helmet>
                <Header title={name} img={banner.url} />
                <h2>{name}</h2>
                <section>
                  {
                    products.map(({ id, name, slug, description }) => {
                      return (
                        <Link to={`/product/${slug}`} key={`prod-${id}`}>
                          <h4>{name}</h4>
                          <p>{description}</p>
                        </Link>
                      )
                    })
                    }
                </section>
              </section>
            )
            })
          })
      <ReturnNav />
        </main>
    )
}


export default Category