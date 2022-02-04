import { gql } from '@apollo/client'

export const ACTIVATE_USER = gql`
  mutation activate($input: UserActivateInput!) {
    activate(input: $input) {
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
