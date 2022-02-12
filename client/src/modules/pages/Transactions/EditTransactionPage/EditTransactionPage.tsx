import React from 'react'
import { InnerNavigate, MyError, MyLoader, TransactionsForm } from '../../../components'
import { useParams } from 'react-router-dom'
import { useGetTransactionDetail } from '../../../hooks'

export const EditTransactionPage = () => {
  const transactionId = useParams()?.['id']

  const { transaction, loading, error } = useGetTransactionDetail(transactionId)

  if (loading) return <MyLoader />
  if (error) return <MyError error={error} />

  return (
    <>
      <InnerNavigate title='Изменить операцию' />

      <TransactionsForm transaction={transaction} />
    </>
  )
}
