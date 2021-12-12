import { useQuery } from '@apollo/client'
import { CATEGORIES } from '../../graphql/queries'

export const useGetCategories = () => {
  const { data, loading, error } = useQuery(CATEGORIES)

  return {
    categories: data?.categories || [],
    loading,
    error
  }
}
