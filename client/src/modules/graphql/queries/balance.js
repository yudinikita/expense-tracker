import { gql } from '@apollo/client'

export const BALANCE = gql`
  query balance ($input: AnalyticsInput) {
    balance(input: $input) {
      totalAmount
      count
    }
  }
`
