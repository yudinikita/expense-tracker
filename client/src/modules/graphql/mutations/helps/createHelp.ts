import { gql } from '@apollo/client'

export const CREATE_HELP = gql`
  mutation createHelp($input: CreateHelpInput!) {
    createHelp(input: $input) {
      id
      title
      answer
      detail
      solved
      user
      createdAt
      updatedAt
    }
  }
`
