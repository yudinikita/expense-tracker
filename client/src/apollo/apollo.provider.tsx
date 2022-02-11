import React from 'react'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from './apollo.client'

export const MyApolloProvider: React.FC = ({ children }) => (
  <ApolloProvider client={apolloClient}>
    {children}
  </ApolloProvider>
)
