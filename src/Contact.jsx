import {Helmet} from 'react-helmet'
import Header from './components/Header'
import ReturnNav from './components/ReturnNav'
import Styles from './styles/contact.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelope, faChevronDown } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
    return(
        <main>
            <Helmet>
                <title>Fundamental Technology | contact</title>
                <link rel="icon" href="/favicon.ico" />
            </Helmet>
        
            <Header title="contact us" img="/images/headers/contact-hero.png"/>
            <section className={Styles.contactWrapper}>
                <h2 className={Styles.contactHeading}>Get in touch</h2>
                <p className={Styles.contactSubheading}>let's talk about your projects</p>
                <section className={Styles.contactDetails}>
                    <section className={Styles.addressSection}>
                       <FontAwesomeIcon icon={faLocationDot} className={Styles.contactIcon} color="white" />
                        <h3>Address</h3>
                        <address>
                            <p>
                                <span>Office:</span>
                                12, Sabowale avenue, stadium area, Keke agege, lagos state, Nigeria
                            </p>
                            <p>
                                <span>Factory:</span>
                                29, olurin street, off iyana IIlogba, Ojuore, Ota, Ogun State, Nigeria
                            </p>
                        </address>
                    </section>
                        <div className={Styles.seperator}></div>
                    <section className={Styles.phoneSection}>
                        <FontAwesomeIcon icon={faPhone} className={Styles.contactIcon} color="white"/>
                        <h3>Phone</h3>
                        <p>+234 807 265 8726</p>
                        <p>+234 803 472 0852</p>
                    </section>
                        <div className={Styles.seperator}></div>
                    <section className={Styles.emailSection}>
                        <FontAwesomeIcon icon={faEnvelope} className={Styles.contactIcon} color="white" />
                        <h3>Email</h3>
                        <p>fundapaints@yahoo.com</p>
                    </section>
                </section>
            </section>
            <section className={Styles.formWrapper}>
                <FontAwesomeIcon icon={faChevronDown} className={Styles.contactIcon} color="black" />.
                <h2>Let's make something together</h2>
                <p>drop us a line.</p>
                <form method="POST" data-netlify="true">
                    <div className={Styles.formControl}>
                        <label htmlFor="name">
                            Your Name:
                        </label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className={Styles.formControl}>
                        <label htmlFor="phone">
                            Phone Number:
                        </label>
                        <input type="number" name="phone" id="phone" />
                    </div>
                    <div className={Styles.formControl}>
                        <label htmlFor="email">
                            Email Address:
                        </label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className={Styles.formControl}>
                        <label htmlFor="message">
                            Drop us your message:
                        </label>
                        <textarea id="message"></textarea>
                    </div>
                    <button type="submit" value="submit">Submit</button>
                </form>
            </section>
            <ReturnNav />
            
        </main>
    )
}


export default Contact