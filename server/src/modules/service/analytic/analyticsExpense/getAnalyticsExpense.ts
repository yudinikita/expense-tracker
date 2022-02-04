import { AnalyticsCategory, AnalyticsInput, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../../utils/index.js'
import { TransactionModel } from '../../../models/index.js'
import { analyticsFilterBuilder } from '../analyticsFilterBuilder/index.js'

export const getAnalyticsExpense = async (user: User, input?: AnalyticsInput | null): Promise<AnalyticsCategory[]> => {
  let filter = {}

  if (input?.filter !== undefined && input?.filter !== null) {
    filter = analyticsFilterBuilder(input.filter)
  }

  const analyticsExpense = await TransactionModel.aggregate([
    {
      $match: {
        user: toObjectId(user.id),
        amount: { $lt: 0 },
        ...filter
      }
    },
    {
      $group:
        {
          _id: '$category',
          amount: { $sum: '$amount' }
        }
    },
    {
      $lookup: {
        from: 'categories',
        localField: '_id',
        foreignField: '_id',
        as: 'categories'
      }
    },
    { $unwind: '$categories' },
    {
      $project: {
        _id: 0,
        category: '$categories',
        amount: 1
      }
    },
    { $sort: { amount: 1 } }
  ])

  return analyticsExpense
}
