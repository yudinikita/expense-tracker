import { gql } from '@apollo/client'

export const TRANSACTIONS = gql`
  query transactions($startDate: String, $endDate: String) {
    transactions(startDate: $startDate, endDate: $endDate) {
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
