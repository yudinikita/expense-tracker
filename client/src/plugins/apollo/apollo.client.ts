import { ApolloClient, from } from '@apollo/client'
import { SERVER_URI } from '../../constants'
import { authLink, errorLink, httpLink, retryLink } from './links'
import { getApolloCache } from './state'

export const getApolloClient = async () => {
  const cache = await getApolloCache()

  return new ApolloClient({
    uri: SERVER_URI,
    link: from([
      errorLink,
      retryLink,
      authLink,
      httpLink
    ]),
    cache
  })
}
