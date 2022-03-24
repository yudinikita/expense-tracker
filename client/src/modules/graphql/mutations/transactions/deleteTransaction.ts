import { gql } from '@apollo/client'

export const DELETE_TRANSACTION = gql`
  mutation deleteTransaction($input: DeleteTransactionInput!) {
    deleteTransaction(input: $input) {
      success
      message
    }
  }
`
