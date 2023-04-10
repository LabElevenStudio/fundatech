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

import {SnipcartProvider} from 'use-snipcart'


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
    <SnipcartProvider>
    <ApolloProvider client={client} >
    <App />
    </ApolloProvider>
    </SnipcartProvider>
    </Router>
  </React.StrictMode>
)
