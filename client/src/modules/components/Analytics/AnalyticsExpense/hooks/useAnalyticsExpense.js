import { useEffect, useState } from 'react'
import { useGetAnalyticsExpense } from '../../../../hooks'
import { getFormattedAnalytics, getTotal } from '../../utils'

export const useAnalyticsExpense = (startDate, endDate) => {
  const [analyticsItems, setAnalyticsItems] = useState([])
  const [total, setTotal] = useState(0)

  const { analyticsExpense, loading, error } = useGetAnalyticsExpense(startDate, endDate)

  useEffect(() => {
    if (!loading && !error && analyticsExpense) {
      const totalAnalytics = getTotal(analyticsExpense)
      const formattedAnalytics = getFormattedAnalytics(analyticsExpense, totalAnalytics)
      setAnalyticsItems(formattedAnalytics)
      setTotal(totalAnalytics)
    }
  }, [analyticsExpense, loading, error])

  return {
    analyticsItems,
    total,
    loading,
    error
  }
}
