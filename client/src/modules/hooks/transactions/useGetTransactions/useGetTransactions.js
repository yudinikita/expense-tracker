import { useQuery } from '@apollo/client'
import { TRANSACTIONS } from '../../../graphql/queries'

export const useGetTransactions = (startDate, endDate) => {
  const { loading, error, data } = useQuery(TRANSACTIONS, {
    variables: {
      input: {
        filter: {
          gte: startDate,
          lte: endDate
        }
      }
    }
  })

  return {
    transactions: data?.transactions,
    loading,
    error,
  }
}
