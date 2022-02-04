import { gql } from '@apollo/client'

export const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($input: UserPasswordInput!) {
    updateUserPassword(input: $input) {
      success
      message
    }
  }
`
