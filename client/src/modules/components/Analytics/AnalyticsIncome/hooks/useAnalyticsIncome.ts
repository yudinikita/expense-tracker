import { useEffect, useState } from 'react'
import { getFormattedAnalytics } from '../../utils'
import { useAnalyticsIncomeQuery } from '../../../../graphql/__generated__/graphql.gen'

export const useAnalyticsIncome = (startDate: Date, endDate: Date) => {
  const [analyticsItems, setAnalyticsItems] = useState<any[]>([])
  const [total, setTotal] = useState(0)

  const { data, loading, error } = useAnalyticsIncomeQuery({
    variables: {
      input: {
        filter: {
          date: {
            gte: startDate.toDateString(),
            lte: endDate.toDateString()
          }
        }
      }
    }
  })

  useEffect(() => {
    if (!loading && (error == null) && ((data?.analyticsIncome) != null)) {
      const analyticsIncome = data.analyticsIncome

      const totalAnalytics = analyticsIncome.reduce((acc, item) => {
        const amount = item?.amount ?? 0
        return acc + amount
      }, 0)

      const formattedAnalytics = getFormattedAnalytics(analyticsIncome, totalAnalytics)

      setAnalyticsItems(formattedAnalytics)
      setTotal(totalAnalytics)
    }
  }, [data?.analyticsIncome, loading, error])

  return {
    analyticsItems,
    total,
    loading,
    error
  }
}
