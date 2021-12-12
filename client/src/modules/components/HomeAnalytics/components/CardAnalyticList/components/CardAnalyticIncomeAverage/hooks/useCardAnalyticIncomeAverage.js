import { useGetDate } from '../../../hooks'
import { useGetAnalyticsAverage } from '../../../../../../../hooks'

export const useCardAnalyticIncomeAverage = () => {
  const { startDate, endDate, month } = useGetDate()

  const { analyticsAverage, loading, error } = useGetAnalyticsAverage(startDate, endDate)

  const incomeAvg = Math.abs(analyticsAverage?.income)
  const expenseAvg = Math.abs(analyticsAverage?.expense)
  const total = incomeAvg + expenseAvg
  const percent = Math.floor(incomeAvg * 100 / total) || 0

  const analytic = {
    title: 'Средний доход',
    desc: `За ${month}`,
    amount: incomeAvg,
    percent: percent,
    color: '#ffefe2',
    colorPercent: '#e99a63',
  }

  return {
    loading,
    error,
    analytic
  }
}
