import { useMutation } from '@apollo/client'
import { ACTIVATE_USER } from '../../../graphql/mutations'

export const useActivationUser = () => {
  const [activateUser, { data, error, loading }] = useMutation(ACTIVATE_USER, {
    errorPolicy: 'all'
  })

  return {
    activateUser,
    activate: data?.activate || [],
    error,
    loading
  }
}
