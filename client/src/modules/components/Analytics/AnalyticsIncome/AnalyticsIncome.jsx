import React from 'react'
import PropTypes from 'prop-types'
import { AnalyticsLoaderList } from '../AnalyticsLoaderList'
import { MyError } from '../../MyError'
import { AnalyticsBalanceList } from '../AnalyticsBalanceList'
import { useAnalyticsIncome } from './hooks/useAnalyticsIncome'

const propTypes = {
  date: PropTypes.exact({
    activeDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
  }),
}

export const AnalyticsIncome = ({ date }) => {
  const { analyticsItems, total, loading, error } = useAnalyticsIncome(date?.startDate, date?.endDate)

  if (loading) return <AnalyticsLoaderList />
  if (error) return <MyError error={error} />

  return <AnalyticsBalanceList analyticsItems={analyticsItems} total={total} />
}

AnalyticsIncome.propTypes = propTypes
