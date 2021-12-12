import { gql } from '@apollo/client'

export const ANALYTICS_INCOME = gql`
  query analyticsIncome ($startDate: String, $endDate: String) {
    analyticsIncome(startDate: $startDate, endDate: $endDate) {
      amount
      category {
        title
        id
      }
    }
  }
`
