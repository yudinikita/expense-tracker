import React from 'react'
import { App } from './App'
import { ApolloClient, ApolloLink, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const httpLink = new HttpLink({
  uri: 'http://localhost:5000/graphql'
})

const authLink = new ApolloLink((operation, forward) => {
  const token = window.localStorage.getItem('_auth')
  operation.setContext(({ headers }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }))
  return forward(operation)
})

const networkErrorsLink = onError(({ networkError }) => {
  if (networkError?.statusCode === 401) {
    console.log('error 401')
  }

  if (networkError?.statusCode === 403) {
    console.log('error 403')
  }

  if (networkError?.statusCode === 404) {
    console.log('error 404')
  }

  if (networkError?.statusCode === 500) {
    console.log('error 500')
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  link: from([authLink, networkErrorsLink, httpLink]),
  cache: new InMemoryCache()
})

const MyApolloProvider = () => (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)

export default MyApolloProvider
