import { gql } from '@apollo/client'

export const ANALYTICS_INCOME = gql`
  query analyticsIncome ($input: AnalyticsInput) {
    analyticsIncome(input: $input) {
      amount
      category {
        title
        id
      }
    }
  }
`
