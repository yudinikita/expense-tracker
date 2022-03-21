import React from 'react'
import { useAlert } from 'react-alert'
import { useSearchTransactionQuery } from 'modules/graphql'
import { useSearchValidation } from './useSearchValidation'

export const useTransactionsSearch = () => {
  const alert = useAlert()
  
  const { data, loading, error, refetch } = useSearchTransactionQuery({
    variables: {
      input: {
        query: ''
      }
    }
  })

  const { validationSearch } = useSearchValidation()

  const transactions = data?.searchTransaction
  const count = transactions?.length ?? 0

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // @ts-expect-error
      const value = e.target.value.trim()
      const validation = validationSearch(value)
      if (validation?.isValid) {
        await refetch({
          input: {
            query: value
          }
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
