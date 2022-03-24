import { gql } from '@apollo/client'

export const ACTIVATE_USER = gql`
  mutation activate($input: UserActivateInput!) {
    activate(input: $input) {
      code
      success
      message
      user {
        id
        settings {
          language
          currency
          theme
        }
        isActivated
        email
      }
      tokens {
        accessToken
        expiresIn
        tokenType
      }
    }
  }
`
