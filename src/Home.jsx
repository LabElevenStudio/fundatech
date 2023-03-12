import {Helmet} from 'react-helmet'
import Header from './components/IndexHeader'
import LinkButton from './components/LinkButton';
import Styles from './styles/home.module.scss'

const Home = () => {
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
             <figure>
               <img
                 src="/images/specialties.png"
                 alt="specialties paint"
               />
               <figcaption>specialities paints</figcaption>
             </figure>
             <figure>
               <img
                 src="/images/emulsion.png"
                 alt="emulsion paint"
               />
               <figcaption>Emulsion paints</figcaption>
             </figure>
             <figure>
               <img
                 src="/images/enamel.png"
                 alt="enamel paint"
               />
               <figcaption>Enamel paints</figcaption>
             </figure>
             <figure>
               <img
                 src="/images/industrial.png"
                 alt="industrial paint"
               />
               <figcaption>industrial marine paints</figcaption>
             </figure>
             <figure>
               <img
                 src="/images/roadmarking.png"
                 alt="road marking"
               />
               <figcaption>road marking paints</figcaption>
             </figure>
             <figure>
               <img
                 src="/images/textured.png"
                 alt="textured"
               />
               <figcaption>textured paints</figcaption>
             </figure>
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
               alt="a bucket of blue paint "
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