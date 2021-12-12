import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetTransactionDetail } from '../../../../hooks'
import { TransactionsDetailContainer } from './components'
import { InnerNavigate, MyError, MyLoader } from '../../..'

export const TransactionsDetail = () => {
  const transactionId = useParams().id

  const { transaction, loading, error } = useGetTransactionDetail(transactionId)

  return (
    <>
      <InnerNavigate title='Операция' />

      {loading && <MyLoader />}
      {!loading && error && <MyError error={error} />}

      {!loading && !error && transaction &&
      <TransactionsDetailContainer transaction={transaction} />}
    </>
  )
}
