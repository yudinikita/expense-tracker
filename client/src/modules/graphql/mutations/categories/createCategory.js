import { gql } from '@apollo/client'

export const CREATE_CATEGORY = gql`
  mutation createCategory($input: CategoryInput!) {
    createCategory(input: $input) {
      id
      title
    }
  }
`
