import React from 'react'
import { InnerNavigate, TransactionsSearch } from '../../../components'
import { useTranslation } from 'react-i18next'

export const SearchTransactionsPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <InnerNavigate title={t('transactions.search.title')} />
      <TransactionsSearch />
    </>
  )
}
