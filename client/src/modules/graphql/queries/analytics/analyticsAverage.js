import { gql } from '@apollo/client'

export const ANALYTICS_AVERAGE = gql`
  query analyticsAverage ($startDate: String, $endDate: String) {
    analyticsAverage(startDate: $startDate, endDate: $endDate) {
      income
      expense
      remainder
    }
  }
`
