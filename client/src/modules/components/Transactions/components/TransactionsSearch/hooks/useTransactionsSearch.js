import { useAlert } from 'react-alert'
import { useSearchValidation } from './useSearchValidation'
import { useGetSearchTransaction } from '../../../../../hooks'

export const useTransactionsSearch = () => {
  const { searchTransaction, loading, error, refetch } = useGetSearchTransaction()
  const { validationSearch } = useSearchValidation()
  const alert = useAlert()

  const transactions = searchTransaction
  const count = transactions?.length || 0

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value.trim()
      const validation = validationSearch(value)
      if (validation?.isValid) {
        await refetch({
          query: value
        })
      } else {
        alert.show(validation?.message)
      }
    }
  }

  return {
    loading,
    error,
    transactions,
    count,
    handleKeyDown
  }
}
