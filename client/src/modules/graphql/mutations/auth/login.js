import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($userInput: UserLoginInput) {
    login(userInput: $userInput) {
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
