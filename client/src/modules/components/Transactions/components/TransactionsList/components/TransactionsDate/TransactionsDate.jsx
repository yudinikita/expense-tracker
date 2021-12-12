import React from 'react'
import PropTypes from 'prop-types'
import { useTransactionsDate } from './hooks'
import styles from './TransactionsDate.module.scss'

export const TransactionsDate = ({ transactions, index }) => {
  const { date } = useTransactionsDate(transactions, index)

  return date ? <p className={styles.date}>{date}</p> : null
}

TransactionsDate.propTypes = {
  transactions: PropTypes.array,
  index: PropTypes.number,
}
