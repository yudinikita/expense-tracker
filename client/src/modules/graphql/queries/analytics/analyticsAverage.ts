import { gql } from '@apollo/client'

export const ANALYTICS_AVERAGE = gql`
  query analyticsAverage ($input: AnalyticsInput) {
    analyticsAverage(input: $input) {
      income
      expense
      remainder
    }
  }
`
