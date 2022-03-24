import { gql } from '@apollo/client'

export const HELPS = gql`
  query helps {
    helps {
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
