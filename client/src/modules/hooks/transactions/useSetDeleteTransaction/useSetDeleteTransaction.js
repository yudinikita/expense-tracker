import { useMutation } from '@apollo/client'
import { DELETE_TRANSACTION } from '../../../graphql/mutations'

export const useSetDeleteTransaction = (transactionId) => {
  const [setDeleteTransaction, { data, loading, error }] = useMutation(DELETE_TRANSACTION, {
    refetchQueries: [
      'transactions',
      'balance',
      'analyticsBalance',
      'analyticsExpense',
      'analyticsIncome',
      'analyticsAverage',
    ],
    update: (cache, { data }) => {
      if (data?.deleteTransaction?.success) {
        cache.evict({
          id: cache.identify({
            __typename: 'Transaction',
            id: transactionId,
          }),
        })
        cache.gc()
      }
    },
  })

  return {
    setDeleteTransaction,
    deleteTransaction: data?.deleteTransaction || [],
    loading,
    error
  }
}
