import { AnalyticsBalance, AnalyticsInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { queryAnalyticsBalance } from '../../../database/index.js'
import { toObjectId } from '../../../utils/index.js'

export const getAnalyticsBalance = async (user: User, input?: AnalyticsInput | null): Promise<AnalyticsBalance> => {
  const analyticsBalance: AnalyticsBalance = {
    income: 0,
    expense: 0,
    remainder: 0
  }

  const transactionsIncome = await queryAnalyticsBalance(toObjectId(user.id), input)

  analyticsBalance.income = transactionsIncome.income
  analyticsBalance.expense = Math.abs(transactionsIncome.expanse)
  analyticsBalance.remainder = transactionsIncome.income - Math.abs(transactionsIncome.expanse)

  return analyticsBalance
}
