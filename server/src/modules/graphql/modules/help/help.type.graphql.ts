import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    "User helps."
    helps: [Help]!
    "Help detail."
    helpDetail(input: HelpDetailInput!): Help
  }

  type Mutation {
    "Create one help."
    createHelp(input: CreateHelpInput!): Help!
    "Update help info."
    updateHelp(input: UpdateHelpInput!): Help!
  }

  "User help."
  type Help {
    "ID of the help."
    id: ID!
    "Title of the help."
    title: String!
    "Detail of the help."
    detail: String
    "Answer of the help."
    answer: String
    "Solved of the help."
    solved: Boolean
    "CreatedAt of the help."
    createdAt: String!
    "UpdatedAt of the help."
    updatedAt: String!
    user: ID!
  }

  input HelpDetailInput {
    "ID of the help."
    id: ID!
  }

  input CreateHelpInput {
    "Title of the help."
    title: String!
    "Detail of the help."
    detail: String
  }

  input UpdateHelpInput {
    "ID of the help."
    id: ID!
    "Solved of the help."
    solved: Boolean
  }
`
