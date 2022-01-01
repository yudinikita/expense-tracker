const { gql } = require('graphql-modules')

module.exports = gql`
  type Query {
    userSettings: Settings!
  }
  
  type Mutation {
    updateUserPassword(userPasswordInput: UserPasswordInput): updateUserPasswordResponse!
    updateUserSettings(settings: SettingsInput): Settings!
  }

  type Settings {
    language: String!
    currency: String!
  }

  input SettingsInput {
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
