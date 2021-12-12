import { useMutation } from '@apollo/client'
import { UPDATE_TRANSACTION } from '../../../graphql/mutations'

export const useSetUpdateTransaction = () => {
  const [setUpdateTransaction, { data, loading, error }] = useMutation(UPDATE_TRANSACTION, {
    refetchQueries: [
      'transactions',
      'transactionDetail',
      'balance',
      'analyticsBalance',
      'analyticsExpense',
      'analyticsIncome',
      'analyticsAverage',
    ]
  })

  return {
    setUpdateTransaction,
    updateTransaction: data?.updateTransaction || [],
    loading,
    error
  }
}
