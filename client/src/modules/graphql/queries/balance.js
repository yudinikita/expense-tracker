import { gql } from '@apollo/client'

export const BALANCE = gql`
  query balance ($startDate: String, $endDate: String) {
    balance {
      totalAmount
      count
    }

    balancePerDate(startDate: $startDate, endDate: $endDate) {
      totalAmount
      count
    }
  }
`
