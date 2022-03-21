import React from 'react'
import { DateSwitcherDate } from 'modules/hooks'
import { Errors } from 'modules/ui'
import { useAnalyticsContainer } from './hooks'
import { AnalyticsLoaderList } from 'modules/components/analytics/AnalyticsLoaderList'
import { AnalyticsBalanceList } from 'modules/components/analytics/AnalyticsBalanceList'

export interface AnalyticsContainerProps {
  typeAnalytic: string
  date: DateSwitcherDate
}

export const AnalyticsContainer: React.FC<AnalyticsContainerProps> = ({
  typeAnalytic,
  date
}) => {
  const {
    loading,
    error,
    analyticsBalanceItems,
    analyticsExpenseItems,
    analyticsExpenseTotal,
    analyticsIncomeItems,
    analyticsIncomeTotal
  } = useAnalyticsContainer(date)

  if (loading) return <AnalyticsLoaderList />
  if (error) return <Errors />

  switch (typeAnalytic) {
    case 'expense':
      return <AnalyticsBalanceList analyticsItems={analyticsExpenseItems} total={analyticsExpenseTotal} />
    case 'income':
      return <AnalyticsBalanceList analyticsItems={analyticsIncomeItems} total={analyticsIncomeTotal} />
    case 'balance':
    default:
      return <AnalyticsBalanceList analyticsItems={analyticsBalanceItems} />
  }
}
