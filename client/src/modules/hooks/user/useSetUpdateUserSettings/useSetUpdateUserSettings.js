import { useMutation } from '@apollo/client'
import { UPDATE_USER_SETTINGS } from '../../../graphql/mutations'

export const useSetUpdateUserSettings = () => {
  const [setUpdateUserSettings, { data, loading, error }] = useMutation(UPDATE_USER_SETTINGS)

  return {
    setUpdateUserSettings,
    updateUserSettings: data?.updateUserSettings || [],
    loading,
    error
  }
}
