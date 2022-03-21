import React from 'react'
import { useTranslation } from 'react-i18next'
import { Transaction } from 'modules/graphql'
import { Divider, Errors, Input, Space, Typography } from 'modules/ui'
import { useTransactionsSearch } from './hooks'
import { TransactionsList } from '../TransactionsList'
import { TransactionsLoader } from '../TransactionsLoader'
import { TransactionsSearchNotFound } from './TransactionsSearchNotFound'

export const TransactionsSearch: React.FC = () => {
  const { t } = useTranslation()
  const { transactions, loading, error, count, handleKeyDown } = useTransactionsSearch()

  if (error) return <Errors />

  const renderTransactionList = () => {
    if (count === 0) return <TransactionsSearchNotFound />
    return <TransactionsList transactions={transactions as Transaction[]} />
  }

  return (
    <div>
      <Space direction='vertical' size={15}>
        <Input
          type='search'
          inputMode='search'
          label={t('transactions.search.input.title')}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />

        <Typography
          variant='text'
          fontSize={16}
        >
          {t('transactions.search.finded')}: <b>{count}</b>
        </Typography>
      </Space>

      <Divider variant='invisible' space={10} />

      {!error && !transactions && loading && <TransactionsLoader />}

      {!loading && renderTransactionList()}
    </div>
  )
}
