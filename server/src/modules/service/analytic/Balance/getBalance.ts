import { AnalyticsInput, Balance, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { TransactionModel } from '../../../models/index.js'
import { toObjectId } from '../../../utils/index.js'
import { analyticsFilterBuilder } from '../analyticsFilterBuilder/index.js'

export const getBalance = async (user: User, input?: AnalyticsInput | null): Promise<Balance> => {
  let filter = {}

  if (input?.filter !== undefined && input?.filter !== null) {
    filter = analyticsFilterBuilder(input.filter)
  }

  const balance = await TransactionModel.aggregate([
    {
      $match: {
        user: toObjectId(user.id),
        ...filter
      }
    },
    {
      $group: {
        _id: '$user',
        totalAmount: { $sum: '$amount' },
        count: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        totalAmount: 1,
        count: 1
      }
    }
  ])

  return balance[0]
}
