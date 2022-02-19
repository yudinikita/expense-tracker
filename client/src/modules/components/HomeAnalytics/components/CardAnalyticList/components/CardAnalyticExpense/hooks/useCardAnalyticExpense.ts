import { useGetDate } from '../../../hooks'
import { useAnalyticsBalanceQuery } from '../../../../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

export const useCardAnalyticExpense = () => {
  const { t } = useTranslation()
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
    title: t('home.analytics.card.expense.title'),
    desc: month,
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
