import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    "User categories."
    categories: [Category]!
  }

  type Mutation {
    "Create one category."
    createCategory(input: CategoryInput!): Category!
    "Update category info."
    updateCategory(id: ID!, input: CategoryInput!): Category!
    "Delete one category."
    deleteCategory(input: CategoryDeleteInput!): CategoryDeletePayload!
    "Delete category with replace on another category."
    deleteCategoryReplace(input: CategoryDeleteInput!): CategoryDeletePayload!
    "Delete category with all transactions this category."
    deleteCategoryWithTransactions(input: CategoryDeleteInput!): CategoryDeletePayload!
  }

  "Category for expense or income."
  type Category {
    "ID of the category."
    id: ID!
    "Title of the category."
    title: String!
  }

  input CategoryDeleteInput {
    id: ID!
    newId: ID
  }

  type CategoryDeletePayload {
    "ID of the deleted category."
    id: ID!
    success: Boolean!
  }

  input CategoryInput {
    "Title of the category."
    title: String!
  }
`
