import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Mutation {
    "User registration."
    registration(input: UserRegistrationInput!): UserRegistrationResponse!
    "User login."
    login(input: UserLoginInput!): UserLoginResponse!
    "User activate account."
    activate(input: UserActivateInput!): UserActivationResponse!
  }

  "Representation of a user."
  type User {
    "ID of the user."
    id: ID!
    "User’s email."
    email: String!
    "User’s code for activation account."
    activationCode: String
    "User is active and is able to use the system."
    isActivated: Boolean!
    "The user's settings."
    settings: Settings!
  }

  type Tokens {
    "The user access token."
    accessToken: String!
    "The expires in token."
    expiresIn: Float!
    "The token type."
    tokenType: String!
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
    "The email activation code."
    code: String!
  }

  type UserLoginResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
    tokens: Tokens
  }

  type UserRegistrationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
    tokens: Tokens
  }

  type UserActivationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    user: User
    tokens: Tokens
  }
`
