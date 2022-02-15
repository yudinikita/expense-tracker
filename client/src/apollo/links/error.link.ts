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
  if (graphQLErrors != null) {
    for (const err of graphQLErrors) {
      switch (err.extensions['code']) {
        case 'UNAUTHENTICATED':
          logout()
      }
    }
  }

  if (networkError != null) {
    console.log(`[Network error]: ${networkError}`)
  }
})
