const { gql } = require('graphql-modules')

module.exports = gql`
  type Query {
    transactions(startDate: String, endDate: String): [Transaction!]!
    transactionDetail(transactionId: ID): Transaction!
    searchTransaction(query: String): [Transaction]
  }

  type Mutation {
    createTransaction(transaction: TransactionInput): Transaction!
    updateTransaction(id: ID, transaction: TransactionInput): Transaction!
    deleteTransaction(id: ID): DeleteTransactionResponse!
  }

  type Transaction {
    id: ID!
    user: ID!
    amount: Int!
    category: Category
    commentary: String
    createdAt: String
    updatedAt: String
  }

  input TransactionInput {
    amount: Int!
    category: ID
    commentary: String
    createdAt: String
    updatedAt: String
  }

  type DeleteTransactionResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`
