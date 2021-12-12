import { gql } from '@apollo/client'

export const DELETE_TRANSACTION = gql`
  mutation deleteTransaction($id: ID) {
    deleteTransaction(id: $id) {
      success
      message
    }
  }
`
