import React from 'react'
import { Errors, Space } from 'modules/ui'
import { AnalyticCard } from 'modules/components'
import { useAnalyticCardList } from './hooks'
import { CardAnalyticLoader } from '../CardAnalyticLoader'

export const AnalyticCardList = () => {
  const {
    loading,
    error,
    expenseCardData,
    incomeCardData,
    expenseAvgCardData,
    incomeAvgCardData
  } = useAnalyticCardList()

  if (loading) return <CardAnalyticLoader />
  if (error) return <Errors />

  return (
    <Space
      direction='vertical'
      size={25}
    >
      <AnalyticCard {...expenseCardData} />
      <AnalyticCard {...incomeCardData} />
      <AnalyticCard {...expenseAvgCardData} />
      <AnalyticCard {...incomeAvgCardData} />
    </Space>
  )
}
