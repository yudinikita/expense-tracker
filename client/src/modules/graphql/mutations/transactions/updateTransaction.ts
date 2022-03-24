import { gql } from '@apollo/client'

export const UPDATE_TRANSACTION = gql`
  mutation updateTransaction($input: UpdateTransactionInput!) {
    updateTransaction(input: $input) {
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
