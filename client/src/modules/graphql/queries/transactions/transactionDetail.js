import { gql } from '@apollo/client'

export const TRANSACTION_DETAIL = gql`
  query transactionDetail($input: TransactionDetailInput!) {
    transactionDetail(input: $input) {
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
