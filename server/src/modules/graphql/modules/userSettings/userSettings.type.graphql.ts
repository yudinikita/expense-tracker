import { gql } from 'graphql-modules'

export const typeDefs = gql`
  type Query {
    userSettings: Settings!
  }

  type Mutation {
    updateUserSettings(input: SettingsInput!): Settings!
    updateUserPassword(input: UserPasswordInput!): updateUserPasswordResponse!
  }

  type Settings {
    theme: String!
    language: String!
    currency: String!
  }

  input SettingsInput {
    theme: String!
    language: String!
    currency: String!
  }

  type updateUserPasswordResponse {
    success: Boolean!
    message: String!
  }

  input UserPasswordInput {
    nowPassword: String
    newPassword: String
  }
`
