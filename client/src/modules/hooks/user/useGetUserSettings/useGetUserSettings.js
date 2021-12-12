import { useQuery } from '@apollo/client'
import { USER_SETTINGS } from '../../../graphql/queries'

export const useGetUserSettings = () => {
  const { data, loading, error } = useQuery(USER_SETTINGS)

  return {
    userSettings: data?.userSettings || [],
    loading,
    error
  }
}
