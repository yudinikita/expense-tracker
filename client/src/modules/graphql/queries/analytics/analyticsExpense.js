import { gql } from '@apollo/client'

export const ANALYTICS_EXPENSE = gql`
  query analyticsExpense ($input: AnalyticsInput) {
    analyticsExpense(input: $input) {
      amount
      category {
        title
        id
      }
    }
  }
`
