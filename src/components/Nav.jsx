import { NavLink } from "react-router-dom";
import { FaCartPlus, FaChevronCircleDown, FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { IconContext } from "react-icons";
import Styles from "../styles/nav.module.scss";
import { useContext, useState } from "react";
import AuthContext from "../stores/AuthContext";
import { useShoppingCart } from "use-shopping-cart";
import ShoppingCart from './Cart'

import { useDisclosure } from '@chakra-ui/react'
import { 
  Modal, 
  ModalOverlay, 
  ModalHeader, 
  ModalBody, 
  ModalContent, 
  ModalCloseButton,
  Text
} from '@chakra-ui/react'


const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )


const Nav = () => {
  const { user, login, logout, authReady } = useContext(AuthContext);
  const { cartCount, handleCartClick, cartDetails } = useShoppingCart()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [overlay, setOverlay] = useState(<OverlayOne />)

    
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
                <IconContext.Provider value={{ size: "1.5em", className: `${Styles.userIcon}` }}>
                  <FaUserCircle />{" "}
                  <p>
                    Welcome, {user.email.slice(0, user.email.indexOf("@"))}
                  </p>{" "}
                </IconContext.Provider>
              </>
            )}
            {user && (
              <>
              <span className={Styles.loginWrapper}>
                <IconContext.Provider value={{ size: "1.5em", className: `${Styles.cartIcon}` }}>
                  <FaShoppingCart onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                  }} />
                  </IconContext.Provider>
                  <span id={Styles.cartCount}>{cartCount}</span>
                  <button
                    type="button"
                    onClick={logout}
                    id={Styles.signupbtn}
                  >
                    Logout
                  </button>
               </span>
              </>
            )}
          </li>
        )}
      </ul>
      <Modal  
        blockScrollOnMount={true} 
        closeOnOverlayClick={true} 
        closeOnEsc={true} 
        isOpen={isOpen} 
        onClose={onClose}
        motionPreset='slideInRight'
        isCentered
        size="full"
        >
        {overlay}
        <ModalContent p={8}>
        <ModalHeader ><Text fontSize={40}>Your Cart</Text></ModalHeader>
        <ModalCloseButton mt={10} mr={5}/>
        <ModalBody>
          <ShoppingCart />
        </ModalBody>
        </ModalContent>
        
      </Modal>
    </nav>
  );
};

export default Nav;
