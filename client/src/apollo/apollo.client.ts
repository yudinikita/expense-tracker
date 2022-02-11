import { ApolloClient, from } from '@apollo/client'
import { SERVER_URI } from '../constants'
import { authLink, errorLink, httpLink, retryLink } from './links'
import { state } from './state'

export const apolloClient = new ApolloClient({
  uri: SERVER_URI,
  link: from([
    errorLink,
    retryLink,
    authLink,
    httpLink
  ]),
  cache: state
})
