import { useQuery } from '@apollo/client'
import { HELP_DETAIL } from '../../../graphql/queries'

export const useGetHelpDetail = (helpId) => {
  const { data, loading, error } = useQuery(HELP_DETAIL, {
    variables: { helpId }
  })

  return {
    helpDetail: data?.helpDetail || [],
    loading,
    error
  }
}
