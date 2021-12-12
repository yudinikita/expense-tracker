import { useQuery } from '@apollo/client'
import { TRANSACTION_DETAIL } from '../../../graphql/queries'

export const useGetTransactionDetail = (transactionId) => {
  const { loading, error, data } = useQuery(TRANSACTION_DETAIL, {
    variables: { transactionId }
  })

  return {
    transaction: data?.transactionDetail || [],
    loading,
    error,
  }
}
