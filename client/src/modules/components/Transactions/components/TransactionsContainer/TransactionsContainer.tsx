import React from 'react'
import { DateSwitcherDate } from '../../../../hooks'
import { TransactionsList } from '../'
import { Transaction, useTransactionsQuery } from 'modules/graphql'

interface Props {
  date: DateSwitcherDate
}

export const TransactionsContainer: React.FC<Props> = ({
  date
}) => {
  const { data, loading, error } = useTransactionsQuery({
    variables: {
      input: {
        filter: {
          gte: date?.startDate.toDateString(),
          lte: date?.endDate.toDateString()
        }
      }
    }
  })

  return (
    <TransactionsList
      transactions={data?.transactions as Transaction[]}
      loading={loading}
      error={error}
    />
  )
}
