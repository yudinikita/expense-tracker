import { gql } from '@apollo/client'

export const HELP_DETAIL = gql`
  query helpDetail($helpId: ID) {
    helpDetail(helpId: $helpId) {
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
