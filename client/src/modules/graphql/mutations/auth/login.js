import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
  mutation login($input: UserLoginInput!) {
    login(input: $input) {
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
