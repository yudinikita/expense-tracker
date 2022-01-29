import pkg from 'mongoose'
import { AnalyticsInput, Balance, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { queryBalance, queryBalancePerDate } from '../../../database/index.js'

const { Types } = pkg

export const getBalance = async (user: User, input: AnalyticsInput): Promise<any> => {
  const userId = new Types.ObjectId(user?.id)

  let balance: Balance = {
    count: 0,
    totalAmount: 0
  }

  const shouldApplyFilters = input?.filter

  if (shouldApplyFilters == null) {
    const balanceFetched = await queryBalance(userId)

    if (balanceFetched[0] != null) balance = balanceFetched[0]
  } else {
    const shouldApplyDateFilters = input?.filter?.date

    if (shouldApplyDateFilters != null) {
      console.log('filter')
      const gteFilter = input?.filter?.date?.gte ?? null
      const lteFilter = input?.filter?.date?.lte ?? null

      if (gteFilter !== null && lteFilter !== null) {
        const gte = new Date(gteFilter)
        const lte = new Date(lteFilter)

        const balanceFetched = await queryBalancePerDate(userId, gte, lte)
        if (balanceFetched[0] != null) balance = balanceFetched[0]
      }
    }
  }

  return balance
}
