import {Helmet} from 'react-helmet'
import Header from './components/IndexHeader'
import LinkButton from './components/LinkButton';
import Styles from './styles/home.module.scss'
import {Link} from 'react-router-dom'
import {useQuery, gql} from '@apollo/client'



const CATEGORY_QUERY = gql`
  query Category {
    categories {
      id
      name
      slug
      thumbnail
    }
  }
`;


const Home = () => {

  const { data, loading, error } = useQuery(CATEGORY_QUERY)


  if(loading) return <p>...Loading</p>
  if (error) return <p>There was an error:{error}</p>
  
    return(
        <main>
        <Helmet>
             <title>Fundamental Technology | Home</title>
             <link rel="icon" href="/favicon.ico" />
         </Helmet>
       <Header
         title="Broad Vision, Honest Values, Great Service."
         img="/images/headers/index-hero.png"
         subtitle="at fundamental technology, customer satisfaction is our peace of mind"
       >
         <nav className={Styles.headerBtns}>
           <LinkButton path="./products" btnType="primary">
             View our products
           </LinkButton>
           <LinkButton path="./contact" btnType="secondary">
             Contact Us
           </LinkButton>
         </nav>
       </Header>
       <main className={Styles.content}>
         <article className={Styles.specialization}>
           <article>
             <h2>Our Specialization</h2>
             <p>
               We are configured through our technological continual imporovement
               to deliver premium quality paint products and services that ensure
               optimum value and satisfaction for their patronage.
             </p>
           </article>
            <section className={Styles.grid}>
              {
                data.categories.map(({ id, name, slug, thumbnail }) => {
                  return (
                    <Link to={`/category/${slug}`} key={id} >
                      <figure>
                        <img
                          src={thumbnail.url}
                          alt={name}
                        />
                        <figcaption>{name}</figcaption>
                      </figure>
                    </Link>
                  );
                })
              }
           </section>
         </article>
         <section className={Styles.products}>
           <article>
             <h2>Our products</h2>
             <p>
               Premium quality paints require expertise in order to meet
               industrial and marine customer's specifications. At Fundamental
               Technologies, we manufacture a wide range of special quality
               paints for both domestic and industrial uses.
             </p>
             <LinkButton path="./products" btnType="three">
               View more
             </LinkButton>
           </article>
           <div className={Styles.paints}>
             <img
               className={Styles.bluepaint}
               src="/images/paint-blue.png"
               alt="a bucket of blue paint"
             />
             <img
               src="/images/paint-orange.png"
               alt="a bucket of orange paint"
             />
             <img
               className={Styles.greenpaint}
               src="/images/paint-green.png"
               alt="a bucket of green paint"
             />
           </div>
         </section>
         <section className={Styles.testimonials}></section>
       </main>
     </main>
    )
}


export default Home