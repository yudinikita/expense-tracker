import { useMutation } from '@apollo/client'
import { UPDATE_HELP } from '../../../graphql/mutations'

export const useSetUpdateHelp = () => {
  const [setUpdateHelp, { data, loading, error }] = useMutation(UPDATE_HELP, {
    refetchQueries: ['helpDetail']
  })

  return {
    setUpdateHelp,
    updateHelp: data?.updateHelp,
    loading,
    error
  }
}
