import React from 'react'
import PropTypes from 'prop-types'
import { MyError } from '../../MyError'
import { AnalyticsBalanceList, AnalyticsLoaderList } from '..'
import { useAnalyticsExpense } from './hooks/useAnalyticsExpense'

const propTypes = {
  date: PropTypes.exact({
    activeDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
  }),
}

export const AnalyticsExpense = ({ date }) => {
  const { analyticsItems, total, loading, error } = useAnalyticsExpense(date?.startDate, date?.endDate)

  if (loading) return <AnalyticsLoaderList />
  if (error) return <MyError error={error} />

  return <AnalyticsBalanceList analyticsItems={analyticsItems} total={total} />
}

AnalyticsExpense.propTypes = propTypes
