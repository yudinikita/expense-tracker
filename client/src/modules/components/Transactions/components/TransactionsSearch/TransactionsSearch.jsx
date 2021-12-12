import React from 'react'
import { useTransactionsSearch } from './hooks'
import { TransactionsList } from '../TransactionsList'
import { MyError } from '../../../MyError'
import { TransactionsLoader } from '../TransactionsLoader'
import { TransactionsSearchNotFound } from './TransactionsSearchNotFound'

export const TransactionsSearch = () => {
  const { transactions, loading, error, count, handleKeyDown } = useTransactionsSearch()

  if (error) return <MyError error={error} />

  const renderTransactionList = () => {
    if (transactions?.length === 0) return <TransactionsSearchNotFound />
    return <TransactionsList transactions={transactions} />
  }

  return (
    <div>
      <div className={'groupInput'}>
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
          Сумма или комментарий
        </label>
      </div>

      <p>Найдено операций: <b>{count}</b></p>

      {!error && !transactions && loading && <TransactionsLoader />}
      {!loading && renderTransactionList()}
    </div>
  )
}
