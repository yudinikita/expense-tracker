import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    categories: [Category!]!
  }

  type Mutation {
    createCategory(category: CategoryInput): Category!
    updateCategory(id: ID, category: CategoryInput): Category!
    deleteCategory(input: CategoryDeleteInput): Boolean
    deleteCategoryReplace(input: CategoryDeleteInput): Boolean
    deleteCategoryWithTransactions(input: CategoryDeleteInput): Boolean
  }

  type Category {
    id: ID!
    title: String!
  }

  input CategoryDeleteInput {
    id: ID!
    newId: ID
  }

  input CategoryInput {
    title: String!
  }
`
