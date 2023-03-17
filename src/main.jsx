import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.scss'

//imports
import {BrowserRouter} from 'react-router-dom'
//apollo imports
import {ApolloClient, ApolloProvider, InMemoryCache, gql} from '@apollo/client'
//usesnipcart import
//authcontext import optional?


const client = new ApolloClient({
  uri: import.meta.env.VITE_HYG_API,
  cache: new InMemoryCache(),
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_HYG_AUTH}`
  },
  connectToDevTools: true
})


// client
//   .query({
//     query: gql`
//     query TestQuery{
//       products{
//         id
//         name
//         price
//       }
//     }`
//   })
//   .then(result => console.log(result))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ApolloProvider client={client} >
    <App />
    </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
)
