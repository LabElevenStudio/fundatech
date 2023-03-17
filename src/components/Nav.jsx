import { NavLink } from "react-router-dom";
import { FaCartPlus, FaChevronCircleDown, FaUserCircle } from "react-icons/fa";
import { IconContext } from "react-icons";
import Styles from "../styles/nav.module.scss";
import { useContext } from "react";
import AuthContext from "../stores/AuthContext";

const Nav = () => {
  const { user, login, logout, authReady } = useContext(AuthContext);

  return (
    <nav className={Styles.navWrapper}>
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
        {authReady && (
            <li className={Styles.cta}>
              {!user && (
                <button type="button" onClick={login} id={Styles.signupbtn}>
                  Register
                </button>
              )}
              {user && (
                <>
                  <IconContext.Provider value={{size: "1.5em", className: `${Styles.userIcon}`}}>
                    <FaUserCircle />{" "}
                    <p>
                      Welcome, {user.email.slice(0, user.email.indexOf("@"))}
                    </p>{" "}
                  </IconContext.Provider>
                </>
              )}
              {user && (
                <>
                  <IconContext.Provider value={{size: "1.3em", className: `${Styles.cartIcon}`}}>
                    <FaCartPlus />
                    <button
                      type="button"
                      onClick={logout}
                      id={Styles.signupbtn}
                    >
                      logout
                    </button>
                  </IconContext.Provider>
                </>
              )}
            </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
