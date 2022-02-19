import React from 'react'
import { InnerNavigate, TransactionsForm } from '../../../components'
import { useTranslation } from 'react-i18next'

export const CreateTransactionPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <InnerNavigate title={t('transactions.create')} />

      <TransactionsForm />
    </>
  )
}
