import LinkButton from './LinkButton';
import Styles from '../styles/returnav.module.scss'

export default function ReturnNav() {
    return <nav className={Styles.returnNav}>
        <LinkButton path="/"  btnType='three'>Back to home</LinkButton>
        <LinkButton path="/contact"  btnType='secondary' >Contact Us</LinkButton>
    </nav>;
}
