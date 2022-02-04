import { gql } from '@apollo/client'

export const ADD_TRANSACTION = gql`
  mutation createTransaction($input: TransactionInput!) {
    createTransaction(input: $input) {
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
