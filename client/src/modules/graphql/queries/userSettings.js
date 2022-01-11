import { gql } from '@apollo/client'

export const USER_SETTINGS = gql`
  query userSettings {
    userSettings {
      theme
      language
      currency
    }
  }
`
