import React from 'react'
import { CardAnalytic } from '../../../CardAnalytic'
import { CardAnalyticLoader } from '../../../CardAnalyticLoader'
import { useCardAnalyticIncomeAverage } from './hooks'

export const CardAnalyticIncomeAverage = () => {
  const { analytic, error, loading } = useCardAnalyticIncomeAverage()

  if (loading) return <CardAnalyticLoader />
  if (error) return null

  return (
    <CardAnalytic
      title={analytic?.title}
      desc={analytic?.desc}
      amount={analytic.amount}
      percent={analytic?.percent}
      color={analytic?.color}
      colorPercent={analytic?.colorPercent}
    />
  )
}
