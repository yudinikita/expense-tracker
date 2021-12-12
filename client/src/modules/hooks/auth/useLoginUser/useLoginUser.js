import { useMutation } from '@apollo/client'
import { LOGIN_USER } from '../../../graphql/mutations'

export const useLoginUser = () => {
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER)

  return {
    loginUser,
    login: data?.login || [],
    loading,
    error
  }
}
