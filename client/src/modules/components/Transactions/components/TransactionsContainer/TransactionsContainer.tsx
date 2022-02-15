import React from 'react'
import { DateSwitcherDate } from '../../../../hooks'
import { MyError } from '../../../MyError'
import { TransactionsList, TransactionsLoader } from '../'
import { Transaction, useTransactionsQuery } from '../../../../graphql/__generated__/graphql.gen'

interface Props {
  date: DateSwitcherDate
}

export const TransactionsContainer: React.FC<Props> = ({ date }) => {
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

  if (loading) return <TransactionsLoader />
  if (error != null) return <MyError error={error} />

  return <TransactionsList transactions={data?.transactions as Transaction[]} />
}
