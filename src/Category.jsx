import { Link, useParams } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import { useQuery, gql } from "@apollo/client";
import ReturnNav from './components/ReturnNav'
import Header from './components/Header'
import Loader from './components/Loader'
import Styles from './styles/category.module.scss'
import ReactMarkdown from 'react-markdown'



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
      }
    }
  }
`;


const Category = () => {

    let { slug } = useParams();

    const { data, loading, error } = useQuery(CATEGORY_QUERY, {
      variables: { slug },
    });



    if (loading) return <Loader sz="md"/>;
    if (error) return <p>There was an error: {error}</p>;
  

    
    return (
      <main>
        {
          data && data.categories.map(({ id, name, banner,  products }) => {

            

            return (
              <section className={Styles.catWrapper} key={`cat-${id}`}>
                <Helmet>
                  <title>Fundamental | {name}</title>
                </Helmet>
                <Header title={name} img={banner.url} />
                <section className={Styles.catProducts}>
                  {
                    products.map(({ id, name, slug}) => {
                      return (
                        <Link to={`/product/${slug}`} key={`prod-${id}`}>
                          <h4>{name}</h4>
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