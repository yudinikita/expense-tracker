import { gql } from '@apollo/client'

export const DELETE_CATEGORY_REPLACE = gql`
  mutation deleteCategoryReplace($input: CategoryDeleteInput) {
    deleteCategoryReplace(input: $input)
  }
`
