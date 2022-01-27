import { TransactionModel } from '../../../models/index.js'
import { QueryAnalyticsCategory } from '../../types/index.js'

export const queryAnalyticsExpense: QueryAnalyticsCategory = async (userId, gte, lte) => {
  return await TransactionModel.aggregate([
    {
      $match: {
        user: userId,
        createdAt: {
          $gte: gte,
          $lte: lte
        },
        amount: { $lt: 0 }
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
}
