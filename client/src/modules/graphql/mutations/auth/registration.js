import { gql } from '@apollo/client'

export const REGISTRATION_USER = gql`
  mutation registration($input: UserRegistrationInput!) {
    registration(input: $input) {
      id
      email
      isActivated
      accessToken
      settings {
        language
        currency
      }
    }
  }
`
