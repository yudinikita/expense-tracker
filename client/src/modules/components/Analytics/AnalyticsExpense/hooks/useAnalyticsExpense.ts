import { useEffect, useState } from 'react'
import { getFormattedAnalytics } from '../../utils'
import { useAnalyticsExpenseQuery } from '../../../../graphql/__generated__/graphql.gen'

export const useAnalyticsExpense = (startDate: Date, endDate: Date) => {
  const [analyticsItems, setAnalyticsItems] = useState<any[]>([])
  const [total, setTotal] = useState(0)

  const { data, error, loading } = useAnalyticsExpenseQuery({
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
    if (!loading && (error == null) && ((data?.analyticsExpense) != null)) {
      const analyticsExpense = data?.analyticsExpense

      const totalAnalytics = analyticsExpense.reduce((acc, item) => {
        const amount = item?.amount ?? 0
        return acc + amount
      }, 0)

      const formattedAnalytics = getFormattedAnalytics(analyticsExpense, totalAnalytics)

      setAnalyticsItems(formattedAnalytics)
      setTotal(totalAnalytics)
    }
  }, [data?.analyticsExpense, loading, error])

  return {
    analyticsItems,
    total,
    loading,
    error
  }
}
