import { gql } from 'graphql-modules'

export default gql`
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
