import { gql } from '@apollo/client'

export const UPDATE_TRANSACTION = gql`
  mutation updateTransaction($id: ID, $transaction: TransactionInput) {
    updateTransaction(id: $id, transaction: $transaction) {
      id
      user
      amount
      category {
        id
        title
      }
      commentary
      createdAt
      updatedAt
    }
  }
`
