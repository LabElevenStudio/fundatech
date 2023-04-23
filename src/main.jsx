import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.scss'

//imports
import {BrowserRouter as Router} from 'react-router-dom'
//apollo imports
import {ApolloClient, ApolloProvider, InMemoryCache, gql} from '@apollo/client'
//usesnipcart import
//authcontext import optional?

{/* import {SnipcartProvider} from 'use-snipcart' */}
import {CartProvider} from 'use-shopping-cart'

import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'

import chakraTheme from '@chakra-ui/theme'

const {
      Modal, 
      ModalOverlay, 
      ModalContent, 
      ModalHeader, 
      ModalBody, 
      ModalCloseButton, 
      Spinner,
      Text
    } = chakraTheme.components


const theme = extendBaseTheme({
  components: {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Spinner,
    Text
  }
})


const client = new ApolloClient({
  uri: import.meta.env.VITE_HYG_API,
  cache: new InMemoryCache(),
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_HYG_AUTH}`
  },
  connectToDevTools: true
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <ChakraProvider theme={theme}> 
    <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe=""
    currency="NGN"
    successUrl={`${import.meta.env.VITE_PUBLIC_URL}/success`}
    cancleUrl={`${import.meta.env.VITE_PUBLIC_URL}/?success=false`}
    allowedCountries={["NG"]}
    shouldPersist={true}
  >
    <ApolloProvider client={client} >
    <App />
    </ApolloProvider>
    </CartProvider>
    </ChakraProvider>
    </Router>
  </React.StrictMode>
)
