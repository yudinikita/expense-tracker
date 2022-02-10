import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Mutation {
    "User registration."
    registration(input: UserRegistrationInput!): User!
    "User login."
    login(input: UserLoginInput!): User!
    "User activate account."
    activate(input: UserActivateInput!): User!
  }

  "Representation of a user."
  type User {
    "ID of the user."
    id: ID!
    "User’s email."
    email: String!
    "User is active and is able to use the system."
    isActivated: Boolean!
    "The user access token."
    accessToken: String!
    "The user's settings."
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
    "The email activation code."
    code: String!
  }

  #  "The response from the User mutations."
  #  type UserResponse implements MutationResponse {
  #    code: String!
  #    success: Boolean!
  #    message: String!
  #    user: User
  #  }
`
