import { AnalyticsBalance, AnalyticsInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { queryAnalyticsAverage } from '../../../database/index.js'
import { toObjectId } from '../../../utils/index.js'

export const getAnalyticsAverage = async (user: User, input?: AnalyticsInput | null): Promise<AnalyticsBalance> => {
  const analyticsBalance: AnalyticsBalance = {
    income: 0,
    expense: 0,
    remainder: 0
  }

  const transactionsIncome = await queryAnalyticsAverage(toObjectId(user.id), input)

  analyticsBalance.income = Math.round(transactionsIncome.income)
  analyticsBalance.expense = Math.round(Math.abs(transactionsIncome.expanse))
  analyticsBalance.remainder = Math.round(transactionsIncome.income - Math.abs(transactionsIncome.expanse))

  return analyticsBalance
}
