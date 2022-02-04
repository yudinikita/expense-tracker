import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    helps: [Help]!
    helpDetail(input: HelpDetailInput!): Help
  }

  type Mutation {
    createHelp(input: CreateHelpInput!): Help!
    updateHelp(input: UpdateHelpInput!): Help!
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

  input HelpDetailInput {
    id: ID!
  }

  input CreateHelpInput {
    title: String!
    detail: String
  }

  input UpdateHelpInput {
    id: ID!
    solved: Boolean
  }
`
