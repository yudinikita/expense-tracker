import { gql } from '@apollo/client'

export const TRANSACTION_DETAIL = gql`
  query transactionDetail($transactionId: ID) {
    transactionDetail(transactionId: $transactionId) {
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
