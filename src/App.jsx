import { useState } from "react";
import reactLogo from "./assets/react.svg";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Products from "./Products";
import Product from "./Product";
import Category from "./Category";
import Projects from "./Projects";
import NotFound from "./404";
import Home from "./Home";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./stores/AuthContext";
import Loader from './components/Loader'

import { useQuery, gql } from "@apollo/client";

const CATEGORY_QUERY = gql`
  query Category {
    categories {
      id
      slug
      name
      description
      products {
        id
        name
        slug
        description
        price
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(CATEGORY_QUERY);

  if (loading) return <Loader sz="xl" />;
  if (error) return <h2>There was an error{error}</h2>;

  return (
    <main>
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
