import { useQuery } from '@apollo/client'
import { HELPS } from '../../../graphql/queries'

export const useGetHelps = () => {
  const { data, loading, error } = useQuery(HELPS)

  return {
    helps: data?.helps || [],
    loading,
    error
  }
}
