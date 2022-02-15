import { useGetDate } from '../../../hooks'
import { useAnalyticsBalanceQuery } from '../../../../../../../graphql/__generated__/graphql.gen'

export const useCardAnalyticExpense = () => {
  const { startDate, endDate, month } = useGetDate()

  const { data, loading, error } = useAnalyticsBalanceQuery({
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

  const income = Math.abs(data?.analyticsBalance?.income ?? 0)
  const expense = Math.abs(data?.analyticsBalance?.expense ?? 0)
  const total = income + expense
  const percent = Math.floor(expense * 100 / total) || 0

  const analytic = {
    title: 'Расход',
    desc: `За ${month}`,
    amount: expense,
    percent: percent,
    color: '#e6f5f9',
    colorPercent: '#79bbd2'
  }

  return {
    loading,
    error,
    analytic
  }
}
