import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { Transaction, useDeleteTransactionMutation } from '../../../../../../../graphql/__generated__/graphql.gen'
import { MouseEventHandler } from 'react'
import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'

export const useTransactionsDetailContainer = (transaction: Transaction) => {
  const { t } = useTranslation()
  const alert = useAlert()
  const navigate = useNavigate()

  const inputDate = transaction?.createdAt
  const date = dayjs(inputDate).format('D MMMM YYYY, HH:mm')

  const [deleteTransaction, { loading }] = useDeleteTransactionMutation({
    variables: {
      input: {
        id: transaction?.id
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
            id: transaction?.id
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
      const id = transaction?.id
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
