import { MouseEventHandler } from 'react'
import { useNavigate } from 'react-router-dom'
import dayjs, { Dayjs } from 'dayjs'
import { useTranslation } from 'react-i18next'
import { useAlert } from 'react-alert'
import { useDeleteTransactionMutation } from 'modules/graphql'

export const useTransactionsDetail = (
  transactionId?: string,
  createdAt?: string | Date | Dayjs
) => {
  const { t } = useTranslation()
  const alert = useAlert()
  const navigate = useNavigate()

  const date = dayjs(createdAt).format('D MMMM YYYY, HH:mm:ss')

  const [deleteTransaction, { loading }] = useDeleteTransactionMutation({
    variables: {
      input: {
        id: transactionId ?? ''
      }
    },
    refetchQueries: [
      'transactions',
      'balance',
      'analyticsBalance',
      'analyticsExpense',
      'analyticsIncome',
      'analyticsAverage'
    ],
    update: (cache, { data }) => {
      if (data?.deleteTransaction?.success) {
        cache.evict({
          id: cache.identify({
            __typename: 'Transaction',
            id: transactionId ?? ''
          })
        })
        cache.gc()
      }
    }
  })

  const handleClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    navigate('edit')
  }

  const handleClickRemove: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      const id = transactionId ?? ''
      const response = await deleteTransaction({
        variables: { input: { id } }
      })
      const result = response?.data?.deleteTransaction
      result?.success ? alert.success(result?.message) : alert.error(result?.message)
      navigate(-1)
    } catch {
      alert.error(t('alert.failed'))
    }
  }

  return {
    date,
    handleClickEdit,
    handleClickRemove,
    loadingRemove: loading
  }
}
