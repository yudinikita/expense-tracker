import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    "User transactions."
    transactions(input: TransactionsInput): [Transaction]!
    "User transaction detail."
    transactionDetail(input: TransactionDetailInput!): Transaction!
    "Search transactions."
    searchTransaction(input: SearchTransactionInput!): [Transaction]!
  }

  type Mutation {
    "Create one transaction."
    createTransaction(input: TransactionInput!): Transaction!
    "Delete one transaction."
    deleteTransaction(input: DeleteTransactionInput!): DeleteTransactionPayload!
    "Update transaction info."
    updateTransaction(input: UpdateTransactionInput!): Transaction!
  }

  type Transaction {
    "ID of the transaction."
    id: ID!
    "Amount of the transaction."
    amount: Int!
    "Category of the transaction."
    category: Category
    "Commentary of the transaction."
    commentary: String
    "CreatedAt of the transaction."
    createdAt: String!
    "UpdatedAt of the transaction."
    updatedAt: String!
    user: ID!
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
