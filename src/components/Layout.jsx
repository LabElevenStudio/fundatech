import Nav from './Nav'
import Footer from './Footer'
import AdBanner from './AdBanner'
import Style from '../styles/layout.module.scss'


const Layout = ({children}) => {
    return(
        <>
    <main className={Style.layoutWrapper}>
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