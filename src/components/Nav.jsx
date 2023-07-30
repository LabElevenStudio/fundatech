import { NavLink } from "react-router-dom";
import Styles from "../styles/nav.module.scss";
import { useMediaQuery } from '@chakra-ui/react';
import {useRef, useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';




const Nav = () => {
  
    const [size, setSize] = useState()

    const [isLessThan320] = useMediaQuery('(max-width: 320px)')
    
    const [isLessThan375] = useMediaQuery('(max-width: 375px)')
    
    const [isLessThan425] = useMediaQuery('(max-width: 425px)')

    const { onOpen, isOpen, onClose } = useDisclosure()

    const btnRef = useRef()
    
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
    
    return (
        <nav className={Styles.navWrapper}>
      <ul>
        <li className={Styles.logo}>
          <NavLink to="/">
            <img src="/images/logo-colored.svg" alt="funda technology logo" />
          </NavLink>
        </li>
        {isLessThan320 ||
          isLessThan375 ||
          isLessThan425? (
          <button ref={btnRef} onClick={() => handleClick('full')} >
            <FontAwesomeIcon icon={faBars} color="orange" />
          </button>
          ) : (
           <li className={Styles.navItems}>
           <ul className={Styles.navList}>
            <li >
              <NavLink to="/" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" >About</NavLink>
            </li>
            <li>
              <NavLink to="/services" >Services</NavLink>
            </li>
            <li>
              <NavLink to="/projects" >Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact" >Contact us</NavLink>
            </li>
            </ul>
        </li>
          )}          
       
      </ul>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={size}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody bg='hsl(19, 90%, 55%)'>
            <ul className={Styles.navList}>
              <li>
                <NavLink to="/" onClick={onClose}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={onClose}>About</NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={onClose}>Services</NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={onClose}>Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={onClose}>Contact us</NavLink>
              </li>
            </ul>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
    );
};

export default Nav;