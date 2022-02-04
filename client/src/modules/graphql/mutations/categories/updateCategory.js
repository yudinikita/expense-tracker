import { gql } from '@apollo/client'

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: ID!, $input: CategoryInput!) {
    updateCategory(id: $id, input: $input) {
      id
      title
    }
  }
`
