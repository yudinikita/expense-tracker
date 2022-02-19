import { getLocalDate } from '../../../../../utils'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useValidationForm } from './useValidationForm'
import { DataTransactionsForm } from './useTransactionsForm'
import { MouseEventHandler } from 'react'
import { Transaction, useCreateTransactionMutation } from '../../../../../graphql/__generated__/graphql.gen'
import { gql } from '@apollo/client'
import { useTranslation } from 'react-i18next'

// @ts-expect-error
const sortTransactionsByDate = (dateA: Transaction, dateB: Transaction) => new Date(dateA?.createdAt) - new Date(dateB?.createdAt)

export const useCreateTransaction = (dataForm: DataTransactionsForm) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const alert = useAlert()

  const { isValid, messageFailed } = useValidationForm(dataForm)

  const [setCreateTransaction, { loading }] = useCreateTransactionMutation({
    refetchQueries: [
      'transactions',
      'balance',
      'analyticsBalance',
      'analyticsExpense',
      'analyticsIncome',
      'analyticsAverage'
    ],
    // @ts-expect-error
    update (cache, { data: { createTransaction } }) {
      cache.modify({
        fields: {
          transactions (existingTransactions = []) {
            const newTransactionRef = cache.writeFragment({
              data: createTransaction,
              fragment: gql`
                fragment newTransaction on Transaction {
                  id
                  amount
                  category {
                    id
                    title
                  }
                  commentary
                  createdAt
                  updatedAt
                }
              `
            })
            const transactionsWithNew = [...existingTransactions, newTransactionRef]
            // @ts-expect-error
            return sortTransactionsByDate(transactionsWithNew)
          }
        }
      })
    }
  })

  const handleClickCreate: MouseEventHandler = async (e) => {
    e.preventDefault()
    if (isValid) {
      try {
        const nowDate = getLocalDate(new Date())
        await setCreateTransaction({
          variables: {
            input: {
              // @ts-expect-error
              amount: dataForm.expense ? dataForm?.amount * -1 : Math.abs(dataForm?.amount),
              category: dataForm?.category,
              createdAt: dataForm?.createdAt ? dataForm?.createdAt : nowDate,
              commentary: dataForm?.commentary
            }
          }
        })
        alert.success(t('alert.transactions.add.success'))
        navigate('/transactions')
      } catch {
        alert.error(t('alert.failed'))
      }
    } else {
      alert.show(messageFailed)
    }
  }

  return {
    handleClickCreate,
    createLoading: loading
  }
}
