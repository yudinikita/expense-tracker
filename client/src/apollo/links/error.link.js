import { onError } from '@apollo/client/link/error'
import browserHistory from '../../browserHistory'

const logout = () => {
  browserHistory.push('/#/logout')
  window.location.reload()
}

export const errorLink = onError(({
  graphQLErrors,
  networkError
}) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        case 'UNAUTHENTICATED':
          logout()
      }
    }
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`)
  }
})
