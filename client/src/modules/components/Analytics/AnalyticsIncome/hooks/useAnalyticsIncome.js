import { useEffect, useState } from 'react'
import { getFormattedAnalytics, getTotal } from '../../utils'
import { useGetAnalyticsIncome } from '../../../../hooks'

export const useAnalyticsIncome = (startDate, endDate) => {
  const [analyticsItems, setAnalyticsItems] = useState([])
  const [total, setTotal] = useState(0)

  const { analyticsIncome, loading, error } = useGetAnalyticsIncome(startDate, endDate)

  useEffect(() => {
    if (!loading && !error && analyticsIncome) {
      const totalAnalytics = getTotal(analyticsIncome)
      const formattedAnalytics = getFormattedAnalytics(analyticsIncome, totalAnalytics)
      setAnalyticsItems(formattedAnalytics)
      setTotal(totalAnalytics)
    }
  }, [analyticsIncome, loading, error])

  return {
    analyticsItems,
    total,
    loading,
    error
  }
}
