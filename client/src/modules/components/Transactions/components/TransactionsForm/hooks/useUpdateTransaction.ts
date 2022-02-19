import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useValidationForm } from './useValidationForm'
import { getLocalDate } from '../../../../../utils'
import { DataTransactionsForm } from './useTransactionsForm'
import { Transaction, useUpdateTransactionMutation } from '../../../../../graphql/__generated__/graphql.gen'
import { MouseEventHandler } from 'react'
import { useTranslation } from 'react-i18next'

export const useUpdateTransaction = (dataForm: DataTransactionsForm, transaction?: Transaction) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const alert = useAlert()

  const { isValid, messageFailed } = useValidationForm(dataForm)

  const [updateTransaction, { loading }] = useUpdateTransactionMutation({
    refetchQueries: [
      'transactions',
      'transactionDetail',
      'balance',
      'analyticsBalance',
      'analyticsExpense',
      'analyticsIncome',
      'analyticsAverage'
    ]
  })

  const handleClickUpdate: MouseEventHandler = async (e) => {
    e.preventDefault()
    if (isValid) {
      try {
        const nowDate = getLocalDate(new Date())
        await updateTransaction({
          variables: {
            input: {
              id: transaction?.id ?? '',
              transaction: {
                // @ts-expect-error
                amount: dataForm.expense ? dataForm?.amount * -1 : Math.abs(dataForm?.amount),
                category: dataForm?.category,
                createdAt: dataForm?.createdAt ? dataForm?.createdAt : nowDate,
                commentary: dataForm?.commentary
              }
            }
          }
        })
        alert.success(t('alert.transactions.update'))
      } catch {
        alert.error(t('alert.failed'))
      }
    } else {
      alert.show(messageFailed)
    }
  }

  const handleClickCancel = () => navigate(-1)

  return {
    handleClickUpdate,
    handleClickCancel,
    updateLoading: loading
  }
}
