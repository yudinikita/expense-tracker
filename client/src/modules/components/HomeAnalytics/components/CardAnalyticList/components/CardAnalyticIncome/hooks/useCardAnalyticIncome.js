import { useGetDate } from '../../../hooks'
import { useGetAnalyticsBalance } from '../../../../../../../hooks'

export const useCardAnalyticIncome = () => {
  const { startDate, endDate, month } = useGetDate()

  const { analyticsBalance, loading, error } = useGetAnalyticsBalance(startDate, endDate)

  const income = Math.abs(analyticsBalance?.income)
  const expense = Math.abs(analyticsBalance?.expense)
  const total = income + expense
  const percent = Math.floor(income * 100 / total) || 0

  const analytic = {
    title: 'Доход',
    desc: `За ${month}`,
    amount: income,
    percent: percent,
    color: '#effcef',
    colorPercent: '#7bd983',
  }

  return {
    loading,
    error,
    analytic
  }
}
