import { gql } from '@apollo/client'

export const SEARCH_TRANSACTION = gql`
  query searchTransaction($input: SearchTransactionInput!) {
    searchTransaction(input: $input) {
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
