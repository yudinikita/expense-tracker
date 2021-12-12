import { gql } from '@apollo/client'

export const UPDATE_USER_SETTINGS = gql`
  mutation updateUserSettings($settings: SettingsInput) {
    updateUserSettings(settings: $settings) {
      language
      currency
    }
  }
`
