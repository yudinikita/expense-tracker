import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './apollo.client'

export const MyApolloProvider = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    {children}
  </ApolloProvider>
)
