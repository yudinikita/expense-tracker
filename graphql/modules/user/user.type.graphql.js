const { gql } = require('graphql-modules')

module.exports = gql`
  type Mutation {
    registration(userInput: UserRegistrationInput): User!
    login(userInput: UserLoginInput): User!
    activate(activationCode: String): User!
  }

  type User {
    id: ID!
    email: String
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
`
