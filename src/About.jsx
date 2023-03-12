import {Helmet} from 'react-helmet'
import Header from './components/Header'
import ReturnNav from './components/ReturnNav'
import Styles from './styles/about.module.scss'

const About = () => {
    return(
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
                    <div className=""></div>
                    <div className=""></div>
                    <div className=""></div>
                </div>
            </section>
            <section className={Styles.founder}>
                <article>
                    <h2>Meet the founder</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti ut error corporis nesciunt vitae maxime quae hic rem quos voluptatibus ullam mollitia amet recusandae, dolores magni. Suscipit ex provident voluptatum?</p>
                </article>
                <img src="/images/founder.png" alt="fundamental technology founder"  />
            </section>
            <ReturnNav />
            
        </main>
    )
}

export default About


