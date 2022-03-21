import React from 'react'
import { useParams } from 'react-router-dom'
import { TransactionsDetail } from './TransactionsDetail'
import { useTransactionDetailQuery } from 'modules/graphql'
import { Errors, Loaders } from 'modules/ui'

export const TransactionsDetailContainer: React.FC = () => {
  const transactionId = useParams()['id'] ?? ''

  const { data, loading, error } = useTransactionDetailQuery({
    variables: {
      input: {
        id: transactionId
      }
    }
  })

  if (loading) return <Loaders />
  if (error) return <Errors />

  return (
    <>
      <TransactionsDetail
        id={transactionId}
        amount={data?.transactionDetail?.amount}
        categoryTitle={data?.transactionDetail?.category?.title}
        commentary={data?.transactionDetail?.commentary}
        createdAt={data?.transactionDetail?.createdAt}
      />
    </>
  )
}
