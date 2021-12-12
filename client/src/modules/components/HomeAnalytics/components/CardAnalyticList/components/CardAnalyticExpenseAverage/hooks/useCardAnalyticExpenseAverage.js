import { useGetDate } from '../../../hooks'
import { useGetAnalyticsAverage } from '../../../../../../../hooks'

export const useCardAnalyticExpenseAverage = () => {
  const { startDate, endDate, month } = useGetDate()

  const { analyticsAverage, loading, error } = useGetAnalyticsAverage(startDate, endDate)

  const incomeAvg = Math.abs(analyticsAverage?.income)
  const expenseAvg = Math.abs(analyticsAverage?.expense)
  const total = incomeAvg + expenseAvg
  const percent = Math.floor(expenseAvg * 100 / total) || 0

  const analytic = {
    title: 'Средний расход',
    desc: `За ${month}`,
    amount: expenseAvg,
    percent: percent,
    color: '#f4f6fa',
    colorPercent: '#798dd2',
  }

  return {
    loading,
    error,
    analytic
  }
}
