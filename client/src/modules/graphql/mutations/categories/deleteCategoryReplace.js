import { gql } from '@apollo/client'

export const DELETE_CATEGORY_REPLACE = gql`
  mutation deleteCategoryReplace($id: ID, $newId: ID) {
    deleteCategoryReplace(id: $id, newId: $newId)
  }
`
