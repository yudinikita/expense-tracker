import { gql } from '@apollo/client'

export const SEARCH_TRANSACTION = gql`
  query searchTransaction($query: String) {
    searchTransaction(query: $query) {
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
