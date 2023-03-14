import {NavLink} from 'react-router-dom'
import {FaCartPlus, FaChevronCircleDown, FaUserCircle} from 'react-icons/fa'
import { IconContext } from "react-icons";
import Styles from '../styles/nav.module.scss'
import { useContext } from 'react';
import AuthContext from '../stores/authContext'

const Nav = () => {

    const {user, login, logout} = useContext(AuthContext)
    console.log(user)
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
                    <button type="button" onClick={login} id={Styles.signupbtn}>Register</button>
                    <button type="button" onClick={logout} id={Styles.signupbtn}>logout</button>
                </li>
            </ul>
        </nav>
    )
}


export default Nav