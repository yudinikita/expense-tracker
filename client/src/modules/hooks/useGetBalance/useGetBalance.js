import { useQuery } from '@apollo/client'
import { BALANCE } from '../../graphql/queries'

export const useGetBalance = (startDate, endDate) => {
  const { data, loading, error } = useQuery(BALANCE, {
    variables: { startDate, endDate }
  })

  return {
    balance: data?.balance || [],
    balancePerDate: data?.balancePerDate || [],
    loading,
    error
  }
}
