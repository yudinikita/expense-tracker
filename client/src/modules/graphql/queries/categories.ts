import { gql } from '@apollo/client'

export const CATEGORIES = gql`
  query categories {
    categories {
      id
      title
    }
  }
`
