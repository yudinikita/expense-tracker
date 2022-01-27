import { gql } from '@apollo/client'

export const DELETE_CATEGORY_WITH_TRANSACTIONS = gql`
  mutation deleteCategoryWithTransactions($input: CategoryDeleteInput) {
    deleteCategoryWithTransactions(input: $input)
  }
`
