import React from 'react'
import { Transaction } from 'modules/graphql'
import { Errors } from 'modules/ui'
import { TransactionsNotFound } from '../TransactionsNotFound'
import { TransactionsLoader } from '../TransactionsLoader'
import { TransactionsDateContainer, TransactionsListItemContainer } from './components'
import s from './TransactionsList.module.scss'

interface TransactionsListProps {
  transactions?: Transaction[]
  loading?: boolean
  error?: any
}

export const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions = [],
  loading = false,
  error,
}) => {

  if (loading) return <TransactionsLoader />
  if (error) return <Errors variant='default' />
  if (transactions?.length === 0) return <TransactionsNotFound />

  return (
    <div>
      <ul className='list-reset'>
        {transactions.map((transaction, index) => (
          <li
            key={transaction?.id}
            className={s.transactionsItem}
          >
            <TransactionsDateContainer transactions={transactions} index={index} />
            <TransactionsListItemContainer transaction={transaction} />
          </li>
        ))}
      </ul>
    </div>
  )
}
