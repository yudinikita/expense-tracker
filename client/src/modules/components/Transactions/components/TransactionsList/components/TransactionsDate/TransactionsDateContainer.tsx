import React from 'react'
import { useTransactionsDate } from './hooks'
import { Transaction } from 'modules/graphql'
import { TransactionsDate } from './TransactionsDate'

interface TransactionsDateContainerProps {
  transactions: Transaction[]
  index: number
}

export const TransactionsDateContainer: React.FC<TransactionsDateContainerProps> = ({
  transactions,
  index
}) => {
  const { date } = useTransactionsDate(transactions, index)

  if (!date) return null

  return <TransactionsDate date={date} />
}
