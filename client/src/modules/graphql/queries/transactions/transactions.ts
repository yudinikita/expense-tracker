import { gql } from '@apollo/client'

export const TRANSACTIONS = gql`
  query transactions($input: TransactionsInput) {
    transactions(input: $input) {
      id
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
