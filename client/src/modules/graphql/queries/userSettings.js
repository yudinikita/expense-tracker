import { gql } from '@apollo/client'

export const USER_SETTINGS = gql`
  query userSettings {
    userSettings {
      language
      currency
    }
  }
`
