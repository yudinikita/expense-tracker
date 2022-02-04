import { useQuery } from '@apollo/client'
import { SEARCH_TRANSACTION } from '../../../graphql/queries'

export const useGetSearchTransaction = (input) => {
  const { data, loading, error, refetch } = useQuery(SEARCH_TRANSACTION, {
    variables: {
      input
    }
  })

  return {
    searchTransaction: data?.searchTransaction || [],
    loading,
    error,
    refetch
  }
}
