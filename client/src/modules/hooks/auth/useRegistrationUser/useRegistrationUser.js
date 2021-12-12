import { useMutation } from '@apollo/client'
import { REGISTRATION_USER } from '../../../graphql/mutations'

export const useRegistrationUser = () => {
  const [registrationUser, { data, loading, error }] = useMutation(REGISTRATION_USER)

  return {
    registrationUser,
    registration: data?.registration || [],
    loading,
    error
  }
}
