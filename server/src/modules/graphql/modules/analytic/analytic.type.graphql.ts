import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    "User current balance."
    balance(input: AnalyticsInput): Balance
    "User analytics balance."
    analyticsBalance(input: AnalyticsInput): AnalyticsBalance!
    "User analytics average."
    analyticsAverage(input: AnalyticsInput): AnalyticsBalance!
    "User analytics expense."
    analyticsExpense(input: AnalyticsInput): [AnalyticsCategory]!
    "User analytics income."
    analyticsIncome(input: AnalyticsInput): [AnalyticsCategory]!
  }

  "User analytics balance."
  type AnalyticsBalance {
    "User income."
    income: Int!
    "User expense."
    expense: Int!
    "User remainder."
    remainder: Int!
  }

  "User analytics category."
  type AnalyticsCategory {
    "User category."
    category: Category!
    "Amount for category."
    amount: Int!
  }

  "User current balance."
  type Balance {
    "Total amount for balance."
    totalAmount: Int!
    "Count user transactions."
    count: Int!
  }

  "Date filters."
  input DateFilters {
    gte: String
    lte: String
  }

  "Analytics filters."
  input AnalyticsFilters {
    date: DateFilters
  }

  "Analytics input."
  input AnalyticsInput {
    filter: AnalyticsFilters
  }
`
