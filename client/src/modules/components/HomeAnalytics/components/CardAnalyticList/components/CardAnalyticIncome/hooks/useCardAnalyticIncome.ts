import { useGetDate } from '../../../hooks'
import { useAnalyticsBalanceQuery } from '../../../../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

export const useCardAnalyticIncome = () => {
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
  const percent = Math.floor(income * 100 / total) || 0

  const analytic = {
    title: t('home.analytics.card.income.title'),
    desc: month,
    amount: income,
    percent: percent,
    color: '#effcef',
    colorPercent: '#7bd983'
  }

  return {
    loading,
    error,
    analytic
  }
}
