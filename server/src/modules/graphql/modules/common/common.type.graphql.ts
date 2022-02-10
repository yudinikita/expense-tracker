import { gql } from 'graphql-modules'

export const typeDefs = gql`
  "The response from common mutations"
  interface MutationResponse {
    "This is a string that represents the status of the data transfer."
    code: String!
    "This is a boolean that indicates whether the mutation was successful."
    success: Boolean!
    "This is a human-readable string that describes the result of the mutation."
    message: String!
  }
`
