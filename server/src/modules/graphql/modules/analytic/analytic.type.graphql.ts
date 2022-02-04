import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    balance(input: AnalyticsInput): Balance

    analyticsBalance(input: AnalyticsInput): AnalyticsBalance!
    analyticsAverage(input: AnalyticsInput): AnalyticsBalance!
    analyticsExpense(input: AnalyticsInput): [AnalyticsCategory]!
    analyticsIncome(input: AnalyticsInput): [AnalyticsCategory]!
  }

  type AnalyticsBalance {
    income: Int!
    expense: Int!
    remainder: Int!
  }

  type AnalyticsCategory {
    category: Category!
    amount: Int!
  }

  type Balance {
    totalAmount: Int!
    count: Int!
  }

  input DateFilters {
    gte: String
    lte: String
  }

  input AnalyticsFilters {
    date: DateFilters
  }

  input AnalyticsInput {
    filter: AnalyticsFilters
  }
`
