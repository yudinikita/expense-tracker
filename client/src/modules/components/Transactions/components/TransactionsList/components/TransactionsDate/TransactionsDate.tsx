import React from 'react'
import { useTransactionsDate } from './hooks'
import styles from './TransactionsDate.module.scss'
import { Transaction } from '../../../../../../graphql/__generated__/graphql.gen'

interface Props {
  transactions: Transaction[]
  index: number
}

export const TransactionsDate: React.FC<Props> = ({ transactions, index }) => {
  const { date } = useTransactionsDate(transactions, index)

  return date ? <p className={styles.date}>{date}</p> : null
}
