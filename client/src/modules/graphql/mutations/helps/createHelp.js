import { gql } from '@apollo/client'

export const CREATE_HELP = gql`
  mutation createHelp($helpInput: HelpInput) {
    createHelp(helpInput: $helpInput) {
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
