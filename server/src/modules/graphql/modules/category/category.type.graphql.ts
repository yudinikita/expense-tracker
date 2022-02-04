import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    categories: [Category]!
  }

  type Mutation {
    createCategory(input: CategoryInput!): Category!
    updateCategory(id: ID!, input: CategoryInput!): Category!
    deleteCategory(input: CategoryDeleteInput!): CategoryDeletePayload!
    deleteCategoryReplace(input: CategoryDeleteInput!): CategoryDeletePayload!
    deleteCategoryWithTransactions(input: CategoryDeleteInput!): CategoryDeletePayload!
  }

  type Category {
    id: ID!
    title: String!
  }

  input CategoryDeleteInput {
    id: ID!
    newId: ID
  }

  type CategoryDeletePayload {
    id: ID!
    success: Boolean!
  }

  input CategoryInput {
    title: String!
  }
`
