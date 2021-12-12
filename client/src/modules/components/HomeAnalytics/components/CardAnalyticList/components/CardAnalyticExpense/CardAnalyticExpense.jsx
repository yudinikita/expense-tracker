import React from 'react'
import { useCardAnalyticExpense } from './hooks'
import { CardAnalytic, CardAnalyticLoader } from '../../..'

export const CardAnalyticExpense = () => {
  const { analytic, error, loading } = useCardAnalyticExpense()

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
