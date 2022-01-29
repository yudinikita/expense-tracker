import pkg from 'mongoose'
import { AnalyticsBalance, AnalyticsInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { queryAnalyticsBalance } from '../../../database/index.js'

const { Types } = pkg

export const getAnalyticsBalance = async (user: User, input: AnalyticsInput): Promise<AnalyticsBalance> => {
  const userId = new Types.ObjectId(user?.id)

  const analyticsBalance: AnalyticsBalance = {
    income: 0,
    expense: 0,
    remainder: 0
  }

  const shouldApplyFilters = input?.filter
  if (shouldApplyFilters == null) return analyticsBalance

  const shouldApplyDateFilters = input?.filter?.date

  if (shouldApplyDateFilters != null) {
    const gteFilter = input?.filter?.date?.gte ?? null
    const lteFilter = input?.filter?.date?.lte ?? null

    if (gteFilter !== null && lteFilter !== null) {
      const gte = new Date(gteFilter)
      const lte = new Date(lteFilter)

      const transactionsIncome = await queryAnalyticsBalance(userId, gte, lte)

      analyticsBalance.income = transactionsIncome.income
      analyticsBalance.expense = Math.abs(transactionsIncome.expanse)
      analyticsBalance.remainder = transactionsIncome.income - Math.abs(transactionsIncome.expanse)
    }
  }

  return analyticsBalance
}
