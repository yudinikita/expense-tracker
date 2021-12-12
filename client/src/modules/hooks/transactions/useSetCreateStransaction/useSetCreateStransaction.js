import { gql, useMutation } from '@apollo/client'
import { ADD_TRANSACTION } from '../../../graphql/mutations'

const sortTransactionsByDate = (dateA, dateB) => new Date(dateA?.createdAt) - new Date(dateB?.createdAt)

export const useSetCreateTransaction = () => {
  const [setCreateTransaction, { data, loading, error }] = useMutation(ADD_TRANSACTION, {
    refetchQueries: [
      'transactions',
      'balance',
      'analyticsBalance',
      'analyticsExpense',
      'analyticsIncome',
      'analyticsAverage',
    ],
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
            return sortTransactionsByDate(transactionsWithNew)
          }
        }
      })
    }
  })

  return {
    setCreateTransaction,
    deleteTransaction: data?.deleteTransaction || [],
    loading,
    error
  }
}
