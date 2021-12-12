import React from 'react'
import { useCardAnalyticIncome } from './hooks'
import { CardAnalytic } from '../../../CardAnalytic'
import { CardAnalyticLoader } from '../../../CardAnalyticLoader'

export const CardAnalyticIncome = () => {
  const { analytic, error, loading } = useCardAnalyticIncome()

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
