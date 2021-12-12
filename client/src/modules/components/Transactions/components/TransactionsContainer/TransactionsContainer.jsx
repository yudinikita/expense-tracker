import React from 'react'
import PropTypes from 'prop-types'
import { useGetTransactions } from '../../../../hooks'
import { MyError } from '../../../MyError'
import { TransactionsList, TransactionsLoader } from '../'

export const TransactionsContainer = ({ date }) => {
  const { transactions, loading, error } = useGetTransactions(date?.startDate, date?.endDate)

  if (loading) return <TransactionsLoader />
  if (error) return <MyError error={error} />

  return <TransactionsList transactions={transactions} />
}

TransactionsContainer.propTypes = {
  date: PropTypes.exact({
    activeDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
  }),
}
