import { gql } from '@apollo/client'

export const ANALYTICS_BALANCE = gql`
  query analyticsBalance ($input: AnalyticsInput) {
    analyticsBalance(input: $input) {
      income
      expense
      remainder
    }
  }
`
