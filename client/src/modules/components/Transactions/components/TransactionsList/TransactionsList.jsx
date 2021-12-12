import React from 'react'
import PropTypes from 'prop-types'
import { TransactionsDate, TransactionsListItem } from './components'
import { TransactionsNotFound } from '..'
import styles from './TransactionsList.module.scss'

const propTypes = {
  transactions: PropTypes.array,
}

const defaultProps = {
  transactions: [],
}

export const TransactionsList = ({ transactions }) => {
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

TransactionsList.defaultProps = defaultProps

TransactionsList.propTypes = propTypes
