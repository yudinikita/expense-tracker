const { gql } = require('graphql-modules')

module.exports = gql`
  type Query {
    balance: Balance!
    balancePerDate(startDate: String, endDate: String): Balance!

    analyticsBalance(startDate: String, endDate: String): AnalyticsBalance!
    analyticsAverage(startDate: String, endDate: String): AnalyticsBalance!
    analyticsExpense(startDate: String, endDate: String): [AnalyticsCategory!]!
    analyticsIncome(startDate: String, endDate: String): [AnalyticsCategory!]!
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
`
