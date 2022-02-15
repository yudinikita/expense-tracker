import React from 'react'
import { MyError } from '../../MyError'
import { AnalyticsBalanceList, AnalyticsLoaderList } from '..'
import { useAnalyticsExpense } from './hooks/useAnalyticsExpense'
import { DateSwitcherDate } from '../../../hooks'

interface Props {
  date: DateSwitcherDate
}

export const AnalyticsExpense: React.FC<Props> = ({ date }) => {
  const { analyticsItems, total, loading, error } = useAnalyticsExpense(date?.startDate, date?.endDate)

  if (loading) return <AnalyticsLoaderList />
  if (error != null) return <MyError error={error} />

  return <AnalyticsBalanceList analyticsItems={analyticsItems} total={total} />
}
