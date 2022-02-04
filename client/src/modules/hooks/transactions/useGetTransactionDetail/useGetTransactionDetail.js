import { useQuery } from '@apollo/client'
import { TRANSACTION_DETAIL } from '../../../graphql/queries'

export const useGetTransactionDetail = (id) => {
  const { loading, error, data } = useQuery(TRANSACTION_DETAIL, {
    variables: {
      input: {
        id
      }
    }
  })

  return {
    transaction: data?.transactionDetail || [],
    loading,
    error,
  }
}
