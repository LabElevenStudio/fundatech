import {FaFacebookF, FaTwitter, FaInstagram, FaPhone, FaEnvelope} from 'react-icons/fa'
import Styles from '../styles/adbanner.module.scss'

const AdBanner = () => {
    return(
        <section className={Styles.bannerContainer}>
            <div className={Styles.contacts}>
                <p><span><FaPhone /></span>+234 807 265 8726</p>
                <p><span><FaPhone /></span>+234 803 472 0852</p>
                <p><span><FaEnvelope /></span>Fundapaints@yahoo.com</p>
            </div>
            <ul className={Styles.social}>
              <li>
                <a>
                <FaFacebookF />
                </a>
              </li>
              <li>
                <a>
                <FaTwitter />
                </a>
              </li>
              <li>
                <a>
                <FaInstagram />
                </a>
              </li>
            </ul>
        </section>
    )
}


export default AdBanner