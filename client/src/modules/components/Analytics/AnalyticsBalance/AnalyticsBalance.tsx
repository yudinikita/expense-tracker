import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { useAnalyticsBalance } from './hooks/useAnalyticsBalance'
import { AnalyticsBalanceList, AnalyticsLoaderList } from '..'
import { MyError } from '../..'

const propTypes = {
  date: PropTypes.exact({
    activeDate: PropTypes.instanceOf(Date).isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired
  }).isRequired
}

export const AnalyticsBalance = ({ date }: InferProps<typeof propTypes>) => {
  const { analyticsItems, loading, error } = useAnalyticsBalance(date?.startDate, date?.endDate)

  if (loading) return <AnalyticsLoaderList />
  if (error) return <MyError error={error} />

  return <AnalyticsBalanceList analyticsItems={analyticsItems} total={null} />
}

AnalyticsBalance.propTypes = propTypes
