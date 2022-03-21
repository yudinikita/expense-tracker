import * as yup from 'yup'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Category, Transaction, useCategoriesQuery, useUpdateTransactionMutation } from 'modules/graphql'
import { TransactionFormValues } from '../types'
import { getAmount, getBalanceType, getCreatedAt } from '../utils'

export const useTransactionsFormEdit = (transaction?: Transaction) => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const alert = useAlert()

  const initialValues: TransactionFormValues = {
    balance: getBalanceType(transaction?.amount),
    amount: transaction?.amount ? Math.abs(transaction?.amount).toString() : '',
    category: transaction?.category?.id ?? '',
    createdAt: getCreatedAt(transaction?.createdAt),
    commentary: transaction?.commentary ?? ''
  }

  const { data } = useCategoriesQuery()

  const categories = data?.categories as Category[]

  const [updateTransaction] = useUpdateTransactionMutation({
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

  const onSubmit = async (values: TransactionFormValues) => {
    await updateTransaction({
      variables: {
        input: {
          id: transaction?.id ?? '',
          transaction: {
            amount: getAmount(parseInt(values.amount), values.balance),
            category: values.category,
            createdAt: values.createdAt,
            commentary: values.commentary
          }
        }
      }
    })

    console.log(values.createdAt)

    alert.success(t('alert.transactions.update'))
    navigate('/transactions')
  }

  const validationSchema: yup.SchemaOf<Omit<TransactionFormValues, 'balance' | 'createdAt' | 'commentary'>> = yup.object({
    amount: yup.string().matches(/^[1-9][0-9]*$/, t('transactions.form.amount.hint')).required(),
    category: yup.string().required()
  })

  const handleClickCancel = () => navigate(-1)

  return {
    initialValues,
    onSubmit,
    validationSchema,
    categories,
    handleClickCancel
  }
}
