import { useGetDate } from '../../../hooks'
import { useAnalyticsAverageQuery } from '../../../../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

export const useCardAnalyticExpenseAverage = () => {
  const { t } = useTranslation()
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
  const percent = Math.floor(expenseAvg * 100 / total) || 0

  const analytic = {
    title: t('home.analytics.card.expense.average'),
    desc: month,
    amount: expenseAvg,
    percent: percent,
    color: '#f4f6fa',
    colorPercent: '#798dd2'
  }

  return {
    loading,
    error,
    analytic
  }
}
