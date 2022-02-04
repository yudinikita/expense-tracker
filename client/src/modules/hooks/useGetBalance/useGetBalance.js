import { useQuery } from '@apollo/client'
import { BALANCE } from '../../graphql/queries'

export const useGetBalance = (startDate, endDate) => {
  const { data, loading, error } = useQuery(BALANCE)

  const balancePerDate = useQuery(BALANCE, {
    variables: {
      input: {
        filter: {
          date: {
            gte: startDate,
            lte: endDate
          }
        }
      }
    }
  })

  return {
    balance: data?.balance || [],
    balancePerDate: balancePerDate?.data?.balance || [],
    loading,
    error
  }
}
