import Nav from './Nav'
import Footer from './Footer'
import AdBanner from './AdBanner'
import Style from '../styles/layout.module.scss'
import { useRef, useLayoutEffect } from 'react'
import {gsap} from 'gsap'

const Layout = ({children}) => {
  
   const page = useRef()


    useLayoutEffect(() => {
        const onPageLoad = () => {
            let ctx = gsap.context(() => {
                gsap.fromTo(page.current, {
                    yPercent: 50,
                    ease: "power2.out"
                }, {
                    yPercent: 0
                })
            }, page);

            return () => ctx.revert;
        }

        if (document.readyState === 'complete') {
            onPageLoad()
            console.log('ready1')
        } else {
            window.addEventListener('load', onPageLoad)

            return window.removeEventListener('load', onPageLoad)
        }
    }, []);
    
    
    return(
        <>
    <main className={Style.layoutWrapper} ref={page}>
      <main className={Style.innerWrapper}>
        <AdBanner />
        <Nav/>
        {children}
      </main>
      <Footer />
    </main>
    </>
    )
}

export default Layout