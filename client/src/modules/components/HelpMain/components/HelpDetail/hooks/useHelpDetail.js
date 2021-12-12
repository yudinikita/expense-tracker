import { useParams } from 'react-router-dom'
import { useGetHelpDetail, useSetUpdateHelp } from '../../../../../hooks'

const locales = 'ru'
const optionsDate = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
}
const formatter = new Intl.DateTimeFormat(locales, optionsDate)

export const useHelpDetail = () => {
  const helpId = useParams().id

  const helpDetailResponse = useGetHelpDetail(helpId)

  const { setUpdateHelp, loading, error } = useSetUpdateHelp()

  const getDate = (date) => {
    return formatter.format(new Date(date))
  }

  const handleSolved = async () => {
    await setUpdateHelp({ variables: { helpUpdate: { id: helpId, solved: true } } })
  }

  const handleUnresolved = async () => {
    await setUpdateHelp({ variables: { helpUpdate: { id: helpId, solved: false } } })
  }

  return {
    helpDetailResponse,
    getDate,
    handleSolved,
    handleUnresolved,
    updateHelpResponse: {
      loading,
      error
    }
  }
}
