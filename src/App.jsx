import { useState } from 'react'
import reactLogo from './assets/react.svg'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Products from './Products'
import Projects from './Projects'
import NotFound from './404'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Layout from './components/Layout'
import {AuthContextProvider} from './stores/AuthContext'
import Category from './Category'




function App(){

   const categoryIds = [
  import.meta.env.VITE_SPECIALTIES,
  import.meta.env.VITE_EMULSION,
  import.meta.env.IANDM,
  import.meta.env.VITE_ENAMEL,
  import.meta.env.VITE_ROAD_MARKING,
  import.meta.env.VITE_TEXTURED,
  ];






  return(
    <main>
      <AuthContextProvider>
      <Layout>
      <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path="/products/category/:slug" element={<Category />} />"
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Layout>
    </AuthContextProvider>
    </main>
  )
}

export default App

