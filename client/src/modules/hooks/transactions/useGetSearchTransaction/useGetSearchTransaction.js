import { useQuery } from '@apollo/client'
import { SEARCH_TRANSACTION } from '../../../graphql/queries'

export const useGetSearchTransaction = () => {
  const { data, loading, error, refetch } = useQuery(SEARCH_TRANSACTION)

  return {
    searchTransaction: data?.searchTransaction || [],
    loading,
    error,
    refetch
  }
}
