import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { MyError } from '../../MyError'
import { AnalyticsBalanceList, AnalyticsLoaderList } from '..'
import { useAnalyticsExpense } from './hooks/useAnalyticsExpense'

const propTypes = {
  date: PropTypes.exact({
    activeDate: PropTypes.instanceOf(Date).isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired
  }).isRequired
}

export const AnalyticsExpense = ({ date }: InferProps<typeof propTypes>) => {
  const { analyticsItems, total, loading, error } = useAnalyticsExpense(date?.startDate, date?.endDate)

  if (loading) return <AnalyticsLoaderList />
  if (error) return <MyError error={error} />

  return <AnalyticsBalanceList analyticsItems={analyticsItems} total={total} />
}

AnalyticsExpense.propTypes = propTypes
