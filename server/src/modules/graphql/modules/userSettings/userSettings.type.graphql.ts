import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    userSettings: Settings!
  }

  type Mutation {
    updateUserSettings(input: SettingsInput!): Settings!
    updateUserPassword(input: UserPasswordInput!): UpdateUserPasswordResponse!
  }

  "The user's account settings."
  type Settings {
    "The user's theme."
    theme: String!
    "The user's language."
    language: String!
    "The user's currency."
    currency: String!
  }

  "The user's account settings input."
  input SettingsInput {
    "The user's theme."
    theme: String!
    "The user's language."
    language: String!
    "The user's currency."
    currency: String!
  }

  input UserPasswordInput {
    nowPassword: String
    newPassword: String
  }

  type UpdateUserPasswordResponse implements MutationResponse {
    "This is a boolean that indicates whether the mutation was successful."
    success: Boolean!
    "This is a human-readable string that describes the result of the mutation."
    message: String!
    "This is a string that represents the status of the data transfer."
    code: String!
  }
`
