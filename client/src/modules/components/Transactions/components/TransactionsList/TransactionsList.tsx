import React from 'react'
import { TransactionsDate, TransactionsListItem } from './components'
import { TransactionsNotFound } from '..'
import styles from './TransactionsList.module.scss'
import { Transaction } from '../../../../graphql/__generated__/graphql.gen'

interface Props {
  transactions: Transaction[]
}

export const TransactionsList: React.FC<Props> = ({ transactions = [] }) => {
  const renderNotFound = () => (transactions?.length === 0 ? <TransactionsNotFound /> : null)

  return (
    <div>
      {renderNotFound()}
      <ul className='list-reset'>
        {transactions.map((transaction, index) => (
          <li
            key={transaction?.id}
            className={styles.transactionsItem}
          >
            <TransactionsDate
              transactions={transactions}
              index={index}
            />
            <TransactionsListItem transaction={transaction} />
          </li>
        ))}
      </ul>
    </div>
  )
}
