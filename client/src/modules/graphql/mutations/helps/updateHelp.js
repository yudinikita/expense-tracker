import { gql } from '@apollo/client'

export const UPDATE_HELP = gql`
  mutation updateHelp($helpUpdate: HelpUpdate) {
    updateHelp(helpUpdate: $helpUpdate) {
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
