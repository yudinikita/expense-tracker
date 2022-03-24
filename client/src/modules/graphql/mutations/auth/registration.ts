import { gql } from '@apollo/client'

export const REGISTRATION_USER = gql`
  mutation registration($input: UserRegistrationInput!) {
    registration(input: $input) {
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
