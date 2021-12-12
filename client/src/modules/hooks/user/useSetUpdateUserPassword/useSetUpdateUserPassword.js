import { useMutation } from '@apollo/client'
import { UPDATE_USER_PASSWORD } from '../../../graphql/mutations'

export const useSetUpdateUserPassword = () => {
  const [setUpdateUserPassword, { data, loading, error }] = useMutation(UPDATE_USER_PASSWORD)

  return {
    setUpdateUserPassword,
    updateUserPassword: data?.updateUserPassword,
    loading,
    error
  }
}
