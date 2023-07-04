import { NavLink } from "react-router-dom";
import Styles from "../styles/nav.module.scss";
import { useMediaQuery } from '@chakra-ui/react';
import { useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';




const Nav = () => {

    const [isLessThan320] = useMediaQuery('(max-width: 320px)')

    const { onOpen, isOpen, onClose } = useDisclosure

    const btnRef = useRef()


    return (
        <nav className={Styles.navWrapper}>
      <ul>
        <li className={Styles.logo}>
          <NavLink to="/">
            <img src="/images/logo-colored.svg" alt="funda technology logo" />
          </NavLink>
        </li>
        {isLessThan320 ? (
          <IconContext.Provider value={{color: "orange", ref:{btnRef}, onClick:{onOpen},className: `${Styles.hamburger}`}}>
            <FaBars />
          </IconContext.Provider>
          ) : (
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
          )}
       
      </ul>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </nav>
    );
};

export default Nav;