import React from 'react'
import PropTypes from 'prop-types'
import { useAnalyticsBalance } from './hooks/useAnalyticsBalance'
import { AnalyticsBalanceList, AnalyticsLoaderList } from '..'
import { MyError } from '../..'

const propTypes = {
  date: PropTypes.exact({
    activeDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date)
  }),
}

export const AnalyticsBalance = ({ date }) => {
  const { analyticsItems, loading, error } = useAnalyticsBalance(date?.startDate, date?.endDate)

  if (loading) return <AnalyticsLoaderList />
  if (error) return <MyError error={error} />

  return <AnalyticsBalanceList analyticsItems={analyticsItems} />
}

AnalyticsBalance.propTypes = propTypes
