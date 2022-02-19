import React from 'react'
import { useParams } from 'react-router-dom'
import { TransactionsDetailContainer } from './components'
import { InnerNavigate, MyError, MyLoader } from '../../..'
import { useTransactionDetailQuery } from '../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

export const TransactionsDetail: React.FC = () => {
  const { t } = useTranslation()

  const transactionId = useParams()['id'] ?? ''

  const { data, loading, error } = useTransactionDetailQuery({
    variables: {
      input: {
        id: transactionId
      }
    }
  })

  return (
    <>
      <InnerNavigate title={t('transactions.detail.title')} />

      {loading && <MyLoader />}
      {!loading && error && <MyError error={error} />}

      {!loading && (error == null) && data?.transactionDetail &&
        // @ts-expect-error
        <TransactionsDetailContainer transaction={data?.transactionDetail} />}
    </>
  )
}
