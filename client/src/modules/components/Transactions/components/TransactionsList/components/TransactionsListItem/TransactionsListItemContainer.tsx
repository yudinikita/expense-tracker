import React from 'react'
import { Transaction } from 'modules/graphql'
import { TransactionsListItem } from './TransactionsListItem'

interface TransactionsListContainerProps {
  transaction?: Transaction
}

export const TransactionsListItemContainer: React.FC<TransactionsListContainerProps> = ({
  transaction
}) => {
  if (!transaction) return null

  return (
    <TransactionsListItem
      id={transaction?.id}
      amount={transaction?.amount}
      categoryTitle={transaction?.category?.title}
      commentary={transaction?.commentary}
    />
  )
}
