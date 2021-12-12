import { useMutation } from '@apollo/client'
import { CREATE_HELP } from '../../../graphql/mutations'

export const useSetCreateHelp = () => {
  const [setCreateHelp, { data, loading, error }] = useMutation(CREATE_HELP, {
    refetchQueries: ['helps']
  })

  return {
    setCreateHelp,
    createHelp: data?.createHelp,
    loading,
    error
  }
}
