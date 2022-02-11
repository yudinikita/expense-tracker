import { ApolloLink, Context } from '@apollo/client'

export const authLink = new ApolloLink((operation, forward) => {
  const token = window.localStorage.getItem('_auth')
  const authorization = token ? `Bearer ${token}` : ''

  operation.setContext(({ headers }: Context) => ({
    headers: {
      ...headers,
      authorization
    }
  }))

  return forward(operation)
})
