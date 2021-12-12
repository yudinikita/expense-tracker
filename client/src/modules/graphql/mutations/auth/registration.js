import { gql } from '@apollo/client'

export const REGISTRATION_USER = gql`
  mutation registration($userInput: UserRegistrationInput) {
    registration(userInput: $userInput) {
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
