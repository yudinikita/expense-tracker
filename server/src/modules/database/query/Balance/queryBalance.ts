import { TransactionModel } from '../../../models/index.js'
import { QueryBalance } from '../../types/index.js'

export const queryBalance: QueryBalance = async (userId) => {
  return await TransactionModel.aggregate([
    { $match: { user: userId } },
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
