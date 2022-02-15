import React from 'react'
import { useAnalyticsBalance } from './hooks/useAnalyticsBalance'
import { AnalyticsBalanceList, AnalyticsLoaderList } from '..'
import { MyError } from '../..'
import { DateSwitcherDate } from '../../../hooks'

interface Props {
  date: DateSwitcherDate
}

export const AnalyticsBalance: React.FC<Props> = ({ date }) => {
  const { analyticsItems, loading, error } = useAnalyticsBalance(date?.startDate, date?.endDate)

  if (loading) return <AnalyticsLoaderList />
  if (error != null) return <MyError error={error} />

  return <AnalyticsBalanceList analyticsItems={analyticsItems} />
}
