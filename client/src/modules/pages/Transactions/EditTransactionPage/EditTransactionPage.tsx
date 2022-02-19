import React from 'react'
import { InnerNavigate, MyError, MyLoader, TransactionsForm } from '../../../components'
import { useParams } from 'react-router-dom'
import { Transaction, useTransactionDetailQuery } from '../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

export const EditTransactionPage: React.FC = () => {
  const { t } = useTranslation()
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
      <InnerNavigate title={t('transactions.edit.title')} />

      <TransactionsForm transaction={data?.transactionDetail as Transaction} />
    </>
  )
}
