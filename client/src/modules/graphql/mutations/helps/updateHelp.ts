import { gql } from '@apollo/client'

export const UPDATE_HELP = gql`
  mutation updateHelp($input: UpdateHelpInput!) {
    updateHelp(input: $input) {
      id
      title
      detail
      answer
      solved
      user
      createdAt
      updatedAt
    }
  }
`
