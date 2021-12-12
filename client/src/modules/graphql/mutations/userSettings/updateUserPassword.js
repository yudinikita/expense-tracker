import { gql } from '@apollo/client'

export const UPDATE_USER_PASSWORD = gql`
  mutation updateUserPassword($userPasswordInput: UserPasswordInput) {
    updateUserPassword(userPasswordInput: $userPasswordInput) {
      success
      message
    }
  }
`
