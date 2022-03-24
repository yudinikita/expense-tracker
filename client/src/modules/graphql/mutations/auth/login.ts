import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($input: UserLoginInput!) {
    login(input: $input) {
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
