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


function App(){
  return(
    <main>
      <Layout>
      <Routes>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/products' element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Layout>
    </main>
  )
}

export default App
