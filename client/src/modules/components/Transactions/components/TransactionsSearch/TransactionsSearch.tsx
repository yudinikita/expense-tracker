import React from 'react'
import { useTransactionsSearch } from './hooks'
import { TransactionsList } from '../TransactionsList'
import { MyError } from '../../../MyError'
import { TransactionsLoader } from '../TransactionsLoader'
import { TransactionsSearchNotFound } from './TransactionsSearchNotFound'
import { useTranslation } from 'react-i18next'

export const TransactionsSearch: React.FC = () => {
  const { t } = useTranslation()
  const { transactions, loading, error, count, handleKeyDown } = useTransactionsSearch()

  if (error != null) return <MyError error={error} />

  const renderTransactionList = () => {
    if (transactions?.length === 0) return <TransactionsSearchNotFound />
    // @ts-expect-error
    return <TransactionsList transactions={transactions} />
  }

  return (
    <div>
      <div className='groupInput'>
        <input
          className='mainInput'
          type='search'
          id='searchInput'
          placeholder=' '
          inputMode='search'
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <label
          htmlFor='searchInput'
          className='mainInput__label'
        >
          {t('transactions.search.input.title')}
        </label>
      </div>

      <p>{t('transactions.search.finded')}: <b>{count}</b></p>

      {!error && (transactions == null) && loading && <TransactionsLoader />}
      {!loading && renderTransactionList()}
    </div>
  )
}
