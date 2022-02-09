import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Mutation {
    registration(input: UserRegistrationInput!): User!
    login(input: UserLoginInput!): User!
    activate(input: UserActivateInput!): User!
  }

  type User {
    id: ID!
    email: String!
    isActivated: Boolean!
    accessToken: String!
    settings: Settings!
  }

  input UserLoginInput {
    email: String!
    password: String!
  }

  input UserRegistrationInput {
    email: String!
    password: String!
  }

  input UserActivateInput {
    code: String!
  }
`
