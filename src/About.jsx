import { Helmet } from 'react-helmet'
import Header from './components/Header'
import ReturnNav from './components/ReturnNav'
import Styles from './styles/about.module.scss'

const About = () => {
    return (
        <main>
            <Helmet>
                <title>Fundamental Technology | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
        
            <Header title="about fundamental technology" img="/images/headers/about-hero.png"/>
            <section className={Styles.story}>
                <h2>Our Story</h2>
                <p>the home of quality paints and allied products</p>
                <article className={Styles.storyInner}>
                    <article>
                        <p>Fundamental Technology incorporated was incorporated on <em>31<sup>st</sup> july, 2017</em> to carry on the business of manufacture of quality special paints both for domestic and industrial uses. </p>
                        <p>we offer training and consultancy services to stakeholders, qualified chemists and laboratory technitians of best application techniques of a wide range of industrial products as well as chemical handling.</p>
                        <p>Our priority is customer statisfaction as we offer free consultation and professional adivice. Get in touch by simply calling the phone number below.</p>
                    </article>
                    <img src="/images/about-image.png" alt="" />
                </article>
            </section>
            <section className={Styles.offerings}>
                <h2>What we offer</h2>
                <div className={Styles.offeringsgrid}>
                    <div className="">
                        <img src="/images/icons/archery 1.svg" alt="accuracy" />
                        <h4> accuracy </h4>
                    </div>
                    <div className="">
                        <img src="/images/icons/celebration 1.svg" alt="neatness" />
                        <h4>neatness</h4>
                    </div>
                    <div className="">
                        <img src="/images/icons/agreement 1.svg" alt="dependability" />
                        <h4> dependability </h4>
                    </div>
                    <div className="">
                        <img src="images/icons/crossroad 2.svg" alt="flexibility" />
                        <h4> flexibility </h4>
                    </div>
                </div>
            </section>
            <section className={Styles.founder}>
                <article>
                    <h2>Meet the founder</h2>
                    <p>
                        <strong>Tijanee Abdul-Gafaar Adeneye</strong>, a Chartered Chemist, the founder of Fundamental Technology Limited and an independent consultant and Controller/CEO of Funda Chemicals Ventures. He was Technical Manager at Chemstar Paints Industry (Nigeria) Limited from November 2010 to December 2014, where he was responsible for researching into new products using the latest technologies, ensuring analytical evaluation of testing materials and products in the laboratory and that the company kept abreast of technologies in the development of new paint products. Previously, Mr. Tijanee worked at DN Meyer Plc from 1997 to 2010 at various capacities: Acting Technical (R & D) Manager (2010), Research & Development Chemist (2009), Quality Control Chemist (2007) and Laboratory Technician (1997). He also worked at IPWA Plc as Senior Laboratory Technician from 1993 to 1997.
                    </p> <br></br>
                    <p>
                        <strong>Tijanee A.G.A. </strong>, Fellow of institute of Chartered Chemists of Nigeria, and dedicated member of both professional and religious societies, is a Fellow of Chemical Society of Nigeria.
                    </p> <br></br>
                    <p>
                        <strong>Tijanee A.G.A.</strong> has Master degree in Business Administration (MBA, Marketing) in 2010 fro Ladoke Akintola University and has attended many conferences and seminars both locally and abroad, many of which are in the field of paint materials and product technology.
                    </p> <br></br>
                </article>
                <img src="/images/founder.png" alt="fundamental technology founder"  />
            </section>
            <ReturnNav />
            
        </main>
    )
}

export default About