import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    transactions(input: TransactionsInput): [Transaction]!
    transactionDetail(input: TransactionDetailInput!): Transaction!
    searchTransaction(input: SearchTransactionInput!): [Transaction]!
  }

  type Mutation {
    createTransaction(input: TransactionInput!): Transaction!
    deleteTransaction(input: DeleteTransactionInput!): DeleteTransactionPayload!
    updateTransaction(input: UpdateTransactionInput!): Transaction!
  }

  type Transaction {
    id: ID!
    user: ID!
    amount: Int!
    category: Category
    commentary: String
    createdAt: String!
    updatedAt: String!
  }

  type DeleteTransactionPayload {
    success: Boolean!
    message: String!
  }

  input TransactionFilter {
    gte: String
    lte: String
  }

  input TransactionsInput {
    filter: TransactionFilter
  }

  input TransactionDetailInput {
    id: ID!
  }

  input SearchTransactionInput {
    query: String!
  }

  input TransactionInput {
    amount: Int!
    category: ID
    commentary: String
    createdAt: String
    updatedAt: String
  }

  input UpdateTransactionInput {
    id: ID!
    transaction: TransactionInput!
  }

  input DeleteTransactionInput {
    id: ID!
  }
`
