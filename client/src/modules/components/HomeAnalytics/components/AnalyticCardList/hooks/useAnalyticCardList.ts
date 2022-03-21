import dayjs from 'dayjs'
import { useTranslation } from 'react-i18next'
import { useAnalyticsAverageQuery, useAnalyticsBalanceQuery } from 'modules/graphql'
import { AnalyticCardProps } from 'modules/components/AnalyticCard'

export const useAnalyticCardList = () => {
  const { t } = useTranslation()

  const startDate = dayjs().startOf('month').format()
  const endDate = dayjs().endOf('month').format()
  const subtitle = dayjs().format('MMMM')

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

  const incomeAmount = Math.abs(analyticsBalanceQuery?.data?.analyticsBalance?.income ?? 0)
  const expenseAmount = Math.abs(analyticsBalanceQuery?.data?.analyticsBalance?.expense ?? 0)
  const totalBalance = incomeAmount + expenseAmount

  const expenseCardData: AnalyticCardProps = {
    title: t('home.analytics.card.expense.title'),
    subtitle: subtitle,
    price: expenseAmount,
    percent: getPercent(expenseAmount, totalBalance),
    colorBg: '#e6f5f9',
    colorTrain: '#79bbd2'
  }

  const incomeCardData: AnalyticCardProps = {
    title: t('home.analytics.card.income.title'),
    subtitle: subtitle,
    price: incomeAmount,
    percent: getPercent(incomeAmount, totalBalance),
    colorBg: '#effcef',
    colorTrain: '#7bd983'
  }

  const analyticsAverageQuery = useAnalyticsAverageQuery({
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

  const incomeAvgAmount = Math.abs(analyticsAverageQuery?.data?.analyticsAverage?.income ?? 0)
  const expenseAvgAmount = Math.abs(analyticsAverageQuery?.data?.analyticsAverage?.expense ?? 0)
  const totalAvg = expenseAvgAmount + incomeAvgAmount

  const expenseAvgCardData: AnalyticCardProps = {
    title: t('home.analytics.card.expense.average'),
    subtitle: subtitle,
    price: expenseAvgAmount,
    percent: getPercent(expenseAvgAmount, totalAvg),
    colorBg: '#f4f6fa',
    colorTrain: '#798dd2'
  }

  const incomeAvgCardData: AnalyticCardProps = {
    title: t('home.analytics.card.income.average'),
    subtitle: subtitle,
    price: incomeAvgAmount,
    percent: getPercent(incomeAvgAmount, totalAvg),
    colorBg: '#ffefe2',
    colorTrain: '#e99a63'
  }

  const loading = analyticsBalanceQuery.loading || analyticsAverageQuery.loading
  const error = analyticsBalanceQuery.error || analyticsAverageQuery.error

  return {
    loading,
    error,
    expenseCardData,
    incomeCardData,
    expenseAvgCardData,
    incomeAvgCardData
  }
}

const getPercent = (amount: number, total: number) =>
  amount === 0
    ? 0
    : Math.floor(amount * 100 / total) ?? 0
