import { useTranslation } from 'react-i18next'
import { useAnalyticsBalanceQuery, useAnalyticsExpenseQuery, useAnalyticsIncomeQuery } from 'modules/graphql'
import { DateSwitcherDate } from 'modules/hooks'
import { AnalyticsItemProps } from 'modules/components'
import { generateRandomColor } from 'modules/utils'

export const useAnalyticsContainer = (
  date: DateSwitcherDate
) => {
  const { t } = useTranslation()

  const startDate = date?.startDate?.toDateString()
  const endDate = date?.endDate?.toDateString()

  const analyticsBalanceQuery = useAnalyticsBalanceQuery({
    variables: {
      input: {
        filter: {
          date: {
            gte: startDate,
            lte: endDate
          }
        }
      }
    }
  })

  const amountIncome = Math.abs(analyticsBalanceQuery?.data?.analyticsBalance.income || 0)
  const amountExpense = analyticsBalanceQuery?.data?.analyticsBalance.expense || 0
  const amountReminder = analyticsBalanceQuery?.data?.analyticsBalance.remainder || 0

  const totalTransaction = amountIncome + Math.abs(amountExpense)

  const incomePercentage = Math.abs(amountIncome / totalTransaction) * 100 || 0
  const expensePercentage = Math.abs(amountExpense / totalTransaction * 100) || 0
  const remainderPercentage = Math.abs(amountReminder / totalTransaction * 100) || 0

  const analyticsBalanceIncome: AnalyticsItemProps = {
    title: t('analytics.balance.income'),
    amount: Math.abs(analyticsBalanceQuery?.data?.analyticsBalance?.income || 0),
    percent: incomePercentage,
    color: '#009e0d'
  }

  const analyticsBalanceExpense: AnalyticsItemProps = {
    title: t('analytics.balance.expense'),
    amount: analyticsBalanceQuery?.data?.analyticsBalance?.expense || 0,
    percent: expensePercentage,
    color: '#ff3d00'
  }

  const analyticsBalanceReminder: AnalyticsItemProps = {
    title: t('analytics.balance.remainder'),
    amount: analyticsBalanceQuery?.data?.analyticsBalance?.remainder || 0,
    percent: remainderPercentage,
    color: '#ffcf26'
  }

  const analyticsBalanceItems = [
    analyticsBalanceIncome,
    analyticsBalanceExpense,
    analyticsBalanceReminder
  ]

  const analyticsExpenseQuery = useAnalyticsExpenseQuery({
    variables: {
      input: {
        filter: {
          date: {
            gte: startDate,
            lte: endDate
          }
        }
      }
    }
  })

  const analyticsExpenseTotal = analyticsExpenseQuery?.data?.analyticsExpense.reduce((acc, item) => {
    const amount = item?.amount ?? 0
    return acc + amount
  }, 0) ?? 0

  const analyticsExpenseItems = getFormattedAnalytics(analyticsExpenseQuery?.data?.analyticsExpense ?? [], analyticsExpenseTotal)

  const analyticsIncomeQuery = useAnalyticsIncomeQuery({
    variables: {
      input: {
        filter: {
          date: {
            gte: startDate,
            lte: endDate
          }
        }
      }
    }
  })

  const analyticsIncomeTotal = analyticsIncomeQuery?.data?.analyticsIncome.reduce((acc, item) => {
    const amount = item?.amount ?? 0
    return acc + amount
  }, 0) ?? 0

  const analyticsIncomeItems = getFormattedAnalytics(analyticsIncomeQuery?.data?.analyticsIncome ?? [], analyticsIncomeTotal)

  const loading = analyticsBalanceQuery?.loading || analyticsExpenseQuery?.loading || analyticsIncomeQuery?.loading

  const error = analyticsBalanceQuery?.error || analyticsExpenseQuery?.error || analyticsIncomeQuery?.error

  return {
    loading,
    error,
    analyticsBalanceItems,
    analyticsExpenseItems,
    analyticsExpenseTotal,
    analyticsIncomeItems,
    analyticsIncomeTotal
  }
}

export const getFormattedAnalytics = (array: any[], total: number): any[] => {
  return array.map(analyticsExpenseItem => {
    const amount = Math.abs(analyticsExpenseItem?.amount ?? 0)
    const percent = Math.abs(amount * 100 / total)
    const color = generateRandomColor()
    return {
      title: analyticsExpenseItem?.category?.title,
      amount,
      percent,
      color
    }
  })
}
