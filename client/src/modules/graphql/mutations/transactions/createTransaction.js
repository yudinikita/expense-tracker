import { gql } from '@apollo/client'

export const ADD_TRANSACTION = gql`
  mutation createTransaction($transaction: TransactionInput) {
    createTransaction(transaction: $transaction) {
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
