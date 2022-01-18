const { gql } = require('graphql-modules')

module.exports = gql`
  type Query {
    helps: [Help!]!
    helpDetail(helpId: ID): Help!
  }

  type Mutation {
    createHelp(helpInput: HelpInput): Help!
    updateHelp(helpUpdate: HelpUpdate): Help!
  }

  type Help {
    id: ID!
    title: String!
    detail: String
    answer: String
    solved: Boolean
    createdAt: String!
    updatedAt: String!
    user: ID!
  }

  input HelpInput {
    title: String!
    detail: String
  }

  input HelpUpdate {
    id: ID!
    solved: Boolean
  }
`
