import { gql } from '@apollo/client'

export const ANALYTICS_EXPENSE = gql`
  query analyticsExpense ($startDate: String, $endDate: String) {
    analyticsExpense(startDate: $startDate, endDate: $endDate) {
      amount
      category {
        title
        id
      }
    }
  }
`
