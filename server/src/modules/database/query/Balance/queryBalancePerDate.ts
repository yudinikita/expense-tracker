import { TransactionModel } from '../../../models/index.js'
import { QueryBalancePerDate } from '../../types/index.js'

export const queryBalancePerDate: QueryBalancePerDate = async (userId, gte, lte) => {
  return await TransactionModel.aggregate([
    {
      $match: {
        user: userId,
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
    },
    { $limit: 1 }
  ])
}
