import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { Transaction, useDeleteTransactionMutation } from '../../../../../../../graphql/__generated__/graphql.gen'
import { MouseEventHandler } from 'react'

const locale = 'ru'

const formatter = new Intl.DateTimeFormat(locale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})

export const useTransactionsDetailContainer = (transaction: Transaction) => {
  const alert = useAlert()
  const navigate = useNavigate()

  const inputDate = transaction?.createdAt
  const date = formatter.format(new Date(inputDate))

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
