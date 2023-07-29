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


import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'

import chakraTheme from '@chakra-ui/theme'

const {
      Drawer,
      DrawerBody,
      DrawerFooter,
      DrawerHeader,
      DrawerOverlay,
      DrawerContent,
      DrawerCloseButton,
      Spinner,
      Text,
      Grid,
      GridItem,
      Skeleton,
      SkeletonCircle,
      SkeletonText,
      Box
    } = chakraTheme.components


const theme = extendBaseTheme({
  components: {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Spinner,
    Text,
    Grid,
    GridItem,
    Skeleton,
    SkeletonCircle,
    SkeletonText
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
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
    </ChakraProvider>
    </Router>
  </React.StrictMode>
)
