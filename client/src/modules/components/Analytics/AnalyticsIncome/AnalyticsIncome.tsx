import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { AnalyticsLoaderList } from '../AnalyticsLoaderList'
import { MyError } from '../../MyError'
import { AnalyticsBalanceList } from '../AnalyticsBalanceList'
import { useAnalyticsIncome } from './hooks/useAnalyticsIncome'

const propTypes = {
  date: PropTypes.exact({
    activeDate: PropTypes.instanceOf(Date).isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date).isRequired
  }).isRequired
}

export const AnalyticsIncome = ({ date }: InferProps<typeof propTypes>) => {
  const { analyticsItems, total, loading, error } = useAnalyticsIncome(date?.startDate, date?.endDate)

  if (loading) return <AnalyticsLoaderList />
  if (error) return <MyError error={error} />

  return <AnalyticsBalanceList analyticsItems={analyticsItems} total={total} />
}

AnalyticsIncome.propTypes = propTypes
