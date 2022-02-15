import { useGetDate } from '../../../hooks'
import { useAnalyticsAverageQuery } from '../../../../../../../graphql/__generated__/graphql.gen'

export const useCardAnalyticIncomeAverage = () => {
  const { startDate, endDate, month } = useGetDate()

  const { data, loading, error } = useAnalyticsAverageQuery({
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

  const incomeAvg = Math.abs(data?.analyticsAverage?.income ?? 0)
  const expenseAvg = Math.abs(data?.analyticsAverage?.expense ?? 0)
  const total = incomeAvg + expenseAvg
  const percent = Math.floor(incomeAvg * 100 / total) || 0

  const analytic = {
    title: 'Средний доход',
    desc: `За ${month}`,
    amount: incomeAvg,
    percent: percent,
    color: '#ffefe2',
    colorPercent: '#e99a63'
  }

  return {
    loading,
    error,
    analytic
  }
}
