import React from 'react'
import { InnerNavigate, MyError, MyLoader, TransactionsForm } from '../../../components'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { TRANSACTION_DETAIL } from '../../../graphql/queries'

export const EditTransactionPage = () => {
  const transactionId = useParams().id

  const { loading, error, data } = useQuery(TRANSACTION_DETAIL, {
    variables: { transactionId }
  })

  if (loading) return <MyLoader />
  if (error) return <MyError error={error} />

  return (
    <>
      <InnerNavigate title='Изменить операцию' />

      <TransactionsForm transaction={data?.transactionDetail} />
    </>
  )
}
