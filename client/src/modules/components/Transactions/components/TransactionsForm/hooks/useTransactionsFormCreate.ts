import * as yup from 'yup'
import { gql } from '@apollo/client'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { transactionFormInitialValues, TransactionFormValues } from '../types'
import { Category, Transaction, useCategoriesQuery, useCreateTransactionMutation } from 'modules/graphql'
import { getAmount, getCreatedAt } from '../utils'

export const useTransactionsFormCreate = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const alert = useAlert()

  const initialValues = {
    ...transactionFormInitialValues,
    createdAt: getCreatedAt()
  }

  const { data } = useCategoriesQuery()

  const categories = data?.categories as Category[]

  // @ts-expect-error
  const sortTransactionsByDate = (dateA: Transaction, dateB: Transaction) => new Date(dateA?.createdAt) - new Date(dateB?.createdAt)

  const [createTransaction] = useCreateTransactionMutation({
    refetchQueries: [
      'transactions',
      'balance',
      'analyticsBalance',
      'analyticsExpense',
      'analyticsIncome',
      'analyticsAverage'
    ],
    update (cache, result) {
      const createTransactionData = result.data?.createTransaction

      cache.modify({
        fields: {
          transactions (existingTransactions = []) {
            const newTransactionRef = cache.writeFragment({
              data: createTransactionData,
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

  const onSubmit = async (values: TransactionFormValues) => {
    await createTransaction({
      variables: {
        input: {
          amount: getAmount(parseInt(values.amount), values.balance),
          category: values.category,
          createdAt: values.createdAt,
          commentary: values.commentary
        }
      }
    })

    alert.success(t('alert.transactions.add.success'))
    navigate('/transactions')
  }

  const validationSchema: yup.SchemaOf<Omit<TransactionFormValues, 'balance' | 'createdAt' | 'commentary'>> = yup.object({
    amount: yup.string().matches(/^[1-9][0-9]*$/, t('transactions.form.amount.hint')).required(),
    category: yup.string().required()
  })

  return {
    initialValues,
    onSubmit,
    validationSchema,
    categories
  }
}
