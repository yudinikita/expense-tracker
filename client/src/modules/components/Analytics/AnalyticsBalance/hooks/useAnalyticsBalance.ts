import { useEffect, useState } from 'react'
import { useAnalyticsBalanceQuery } from '../../../../graphql/__generated__/graphql.gen'
import { useTranslation } from 'react-i18next'

const defaultAnalytics = { amount: 0, percent: 0 }

export const useAnalyticsBalance = (startDate?: Date, endDate?: Date) => {
  const { t } = useTranslation()
  const [income, setIncome] = useState(defaultAnalytics)
  const [expense, setExpense] = useState(defaultAnalytics)
  const [remainder, setRemainder] = useState(defaultAnalytics)

  const { data, loading, error } = useAnalyticsBalanceQuery({
    variables: {
      input: {
        filter: {
          date: {
            gte: startDate?.toDateString(),
            lte: endDate?.toDateString()
          }
        }
      }
    }
  })

  useEffect(() => {
    if (!loading && (error == null) && ((data?.analyticsBalance) != null)) {
      const analyticsBalance = data?.analyticsBalance

      const totalTransaction = Math.abs(analyticsBalance.income) + Math.abs(analyticsBalance.expense) || 0

      const incomePercentage = Math.abs(analyticsBalance.income / totalTransaction) * 100 || 0
      const expensePercentage = Math.abs(analyticsBalance.expense / totalTransaction * 100) || 0
      const remainderPercentage = Math.abs(analyticsBalance.remainder / totalTransaction * 100) || 0

      setIncome({
        amount: analyticsBalance.income,
        percent: incomePercentage
      })

      setExpense({
        amount: Math.abs(analyticsBalance.expense),
        percent: expensePercentage
      })

      setRemainder({
        amount: analyticsBalance.remainder,
        percent: remainderPercentage
      })
    }
  }, [data?.analyticsBalance, loading, error])

  const analyticsItems = [
    {
      id: 0,
      title: t('analytics.balance.income'),
      amount: income.amount,
      percent: income.percent,
      color: '#009e0d'
    },
    {
      id: 1,
      title: t('analytics.balance.expense'),
      amount: expense.amount,
      percent: expense.percent,
      color: '#ff3d00'
    },
    {
      id: 2,
      title: t('analytics.balance.remainder'),
      amount: remainder.amount,
      percent: remainder.percent,
      color: '#ffcf26'
    }
  ]

  return { analyticsItems, loading, error }
}
