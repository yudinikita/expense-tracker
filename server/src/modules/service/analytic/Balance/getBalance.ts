import { AnalyticsInput, Balance, User } from '../../../graphql/__generated__/graphql.types.gen.js'
import { TransactionModel } from '../../../models/index.js'
import { toObjectId } from '../../../utils/index.js'

export const getBalance = async (user: User, input?: AnalyticsInput | null): Promise<Balance> => {
  const gte = input?.filter?.date?.gte ? new Date(input.filter.date.gte) : undefined
  const lte = input?.filter?.date?.lte ? new Date(input.filter.date.lte) : undefined

  const balance = await TransactionModel.aggregate([
    {
      $match: {
        user: toObjectId(user.id),
        createdAt: {
          $gte: gte,
          $lte: lte
        }
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
