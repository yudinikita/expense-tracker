import { gql } from '@apollo/client'

export const ANALYTICS_BALANCE = gql`
  query analyticsBalance ($startDate: String, $endDate: String) {
    analyticsBalance(startDate: $startDate, endDate: $endDate) {
      income
      expense
      remainder
    }
  }
`
