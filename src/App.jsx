import { useState } from "react";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Products from "./Products";
import Product from "./Product";
import Category from "./Category";
import Projects from "./Projects";
import NotFound from "./404";
import Success from './Success'
import Home from "./Home";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./stores/AuthContext";
import {Helmet} from 'react-helmet'


function App() {
  

  return (
    <main>
    <Helmet>
      <title>Fundamental Technology | Home</title>
    </Helmet>
      <AuthContextProvider>
        <Layout>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
            <Route path="product/:slug" element={<Product />} />
            <Route path="category/:slug" element={<Category />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
        </Layout>
      </AuthContextProvider>
    </main>
  );
}

export default App;
