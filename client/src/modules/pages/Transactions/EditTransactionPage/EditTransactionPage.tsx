import React from 'react'
import { InnerNavigate, MyError, MyLoader, TransactionsForm } from '../../../components'
import { useParams } from 'react-router-dom'
import { Transaction, useTransactionDetailQuery } from '../../../graphql/__generated__/graphql.gen'

export const EditTransactionPage: React.FC = () => {
  const transactionId = useParams()?.['id'] ?? ''

  const { data, loading, error } = useTransactionDetailQuery({
    variables: {
      input: {
        id: transactionId
      }
    }
  })

  if (loading) return <MyLoader />
  if (error != null) return <MyError error={error} />

  return (
    <>
      <InnerNavigate title='Изменить операцию' />

      <TransactionsForm transaction={data?.transactionDetail as Transaction} />
    </>
  )
}
