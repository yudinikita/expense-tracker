import { useParams } from 'react-router-dom'
import { useHelpDetailQuery, useUpdateHelpMutation } from 'modules/graphql'

export const useHelpDetail = () => {
  const helpId = useParams()['id'] ?? ''

  const helpDetailResponse = useHelpDetailQuery({
    variables: {
      input: {
        id: helpId
      }
    }
  })

  const [updateHelp, { loading, error }] = useUpdateHelpMutation({
    refetchQueries: ['helpDetail']
  })

  const handleSolved = async () => {
    if (helpId) {
      await updateHelp({ variables: { input: { id: helpId, solved: true } } })
    }
  }

  const handleUnresolved = async () => {
    if (helpId) {
      await updateHelp({ variables: { input: { id: helpId, solved: false } } })
    }
  }

  return {
    helpDetailResponse,
    handleSolved,
    handleUnresolved,
    updateHelpResponse: {
      loading,
      error
    }
  }
}
