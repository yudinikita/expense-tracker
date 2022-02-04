import { gql } from '@apollo/client'

export const UPDATE_USER_SETTINGS = gql`
  mutation updateUserSettings($input: SettingsInput!) {
    updateUserSettings(input: $input) {
      theme
      language
      currency
    }
  }
`
