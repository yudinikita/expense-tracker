import { gql } from '@apollo/client'

export const CREATE_CATEGORY = gql`
  mutation createCategory($category: CategoryInput) {
    createCategory(category: $category) {
      id
      title
    }
  }
`
