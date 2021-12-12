import { gql } from '@apollo/client'

export const DELETE_CATEGORY_WITH_TRANSACTIONS = gql`
  mutation deleteCategoryWithTransactions($id: ID) {
    deleteCategoryWithTransactions(id: $id)
  }
`
