import {NavLink} from 'react-router-dom'
import {FaCartPlus, FaChevronCircleDown, FaUserCircle} from 'react-icons/fa'
import { IconContext } from "react-icons";
import Styles from '../styles/nav.module.scss'



const Nav = () => {
    return(
        <nav className={Styles.navWrapper} >
            <ul>
                <li className={Styles.logo}>
                    <NavLink to="/">
                        <img src="/images/logo-colored.svg" alt="funda technology logo" />
                    </NavLink>
                </li>
                <li className={Styles.navItems}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact us</NavLink>
                        </li>
                    </ul>
                </li>
                <li className={Styles.cta}>
                    <button type="button" id={Styles.signupbtn}>Signup/Login</button>
                </li>
            </ul>
        </nav>
    )
}


export default Nav