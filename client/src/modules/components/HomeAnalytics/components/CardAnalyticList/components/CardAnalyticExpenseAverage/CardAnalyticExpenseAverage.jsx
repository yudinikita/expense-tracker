import React from 'react'
import { useCardAnalyticExpenseAverage } from './hooks'
import { CardAnalytic } from '../../../CardAnalytic'
import { CardAnalyticLoader } from '../../../CardAnalyticLoader'

export const CardAnalyticExpenseAverage = () => {
  const { analytic, error, loading } = useCardAnalyticExpenseAverage()

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
