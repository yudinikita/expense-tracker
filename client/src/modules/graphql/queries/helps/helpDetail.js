import { gql } from '@apollo/client'

export const HELP_DETAIL = gql`
  query helpDetail($input: HelpDetailInput!) {
    helpDetail(input: $input) {
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
