import { useGetDate } from '../../../hooks'
import { useGetAnalyticsBalance } from '../../../../../../../hooks'

export const useCardAnalyticExpense = () => {
  const { startDate, endDate, month } = useGetDate()

  const { analyticsBalance, loading, error } = useGetAnalyticsBalance(startDate, endDate)

  const income = Math.abs(analyticsBalance?.income)
  const expense = Math.abs(analyticsBalance?.expense)
  const total = income + expense
  const percent = Math.floor(expense * 100 / total) || 0

  const analytic = {
    title: 'Расход',
    desc: `За ${month}`,
    amount: expense,
    percent: percent,
    color: '#e6f5f9',
    colorPercent: '#79bbd2',
  }

  return {
    loading,
    error,
    analytic
  }
}
