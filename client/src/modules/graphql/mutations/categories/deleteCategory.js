import { gql } from '@apollo/client'

export const DELETE_CATEGORY = gql`
  mutation deleteCategory($input: CategoryDeleteInput) {
    deleteCategory(input: $input)
  }
`
