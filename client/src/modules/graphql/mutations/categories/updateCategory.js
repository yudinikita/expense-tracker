import { gql } from '@apollo/client'

export const UPDATE_CATEGORY = gql`
  mutation updateCategory($id: ID, $category: CategoryInput) {
    updateCategory(id: $id, category: $category) {
      id
      title
    }
  }
`
