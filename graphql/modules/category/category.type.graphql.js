const { gql } = require('graphql-modules')

module.exports = gql`
  type Query {
    categories: [Category!]!
  }

  type Mutation {
    createCategory(category: CategoryInput): Category!
    updateCategory(id: ID, category: CategoryInput): Category!
    deleteCategory(id: ID): Boolean
    deleteCategoryReplace(id: ID, newId: ID): Boolean
    deleteCategoryWithTransactions(id: ID): Boolean
  }

  type Category {
    id: ID!
    title: String!
    user: ID!
  }

  input CategoryInput {
    title: String!
  }
`
