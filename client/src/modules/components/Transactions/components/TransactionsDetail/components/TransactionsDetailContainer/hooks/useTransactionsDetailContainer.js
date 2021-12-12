import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { useSetDeleteTransaction } from '../../../../../../../hooks'

const locale = 'ru'

const options = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}

const formatter = new Intl.DateTimeFormat(locale, options)

export const useTransactionsDetailContainer = (transaction) => {
  const alert = useAlert()
  const navigate = useNavigate()

  const inputDate = transaction?.createdAt
  const date = formatter.format(new Date(inputDate))

  const { setDeleteTransaction, loading } = useSetDeleteTransaction(transaction?.id)

  const handleClickEdit = () => {
    navigate('edit')
  }

  const handleClickRemove = async () => {
    try {
      const id = transaction?.id
      const response = await setDeleteTransaction({
        variables: { id }
      })
      const result = response?.data?.deleteTransaction
      result?.success ? alert.success(result?.message) : alert.error(result?.message)
      navigate(-1)
    } catch {
      alert.success('Ошибка при удалении')
    }
  }

  return {
    date,
    handleClickEdit,
    handleClickRemove,
    loadingRemove: loading
  }
}
