import React from 'react'
import { AnalyticsLoaderList } from '../AnalyticsLoaderList'
import { MyError } from '../../MyError'
import { AnalyticsBalanceList } from '../AnalyticsBalanceList'
import { useAnalyticsIncome } from './hooks/useAnalyticsIncome'
import { DateSwitcherDate } from '../../../hooks'

interface Props {
  date: DateSwitcherDate
}

export const AnalyticsIncome: React.FC<Props> = ({ date }) => {
  const { analyticsItems, total, loading, error } = useAnalyticsIncome(date?.startDate, date?.endDate)

  if (loading) return <AnalyticsLoaderList />
  if (error != null) return <MyError error={error} />

  return <AnalyticsBalanceList analyticsItems={analyticsItems} total={total} />
}
