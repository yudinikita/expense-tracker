import React from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Transaction, useTransactionDetailQuery } from 'modules/graphql'
import { Errors, Loaders } from 'modules/ui'
import { NavigationBar, TransactionsFormEdit } from 'modules/components'
import { NAVIGATION } from 'modules/constants'

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

  if (loading) return <Loaders />
  if (error != null) return <Errors />

  return (
    <>
      <NavigationBar
        title={t('transactions.edit.title')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <TransactionsFormEdit transaction={data?.transactionDetail as Transaction} />
    </>
  )
}
