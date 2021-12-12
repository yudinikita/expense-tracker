import { gql } from '@apollo/client'

export const ACTIVATE_USER = gql`
  mutation activate($activationCode: String) {
    activate(activationCode: $activationCode) {
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
