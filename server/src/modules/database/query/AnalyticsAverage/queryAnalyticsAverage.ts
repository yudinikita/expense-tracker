import { TransactionModel } from '../../../models/index.js'
import { QueryAnalytics, ResponseAnalytics } from '../../types/index.js'

export const queryAnalyticsAverage: QueryAnalytics = async (userId, gte, lte) => {
  const response = await TransactionModel.aggregate([
    {
      $facet: {
        income: [
          {
            $match: {
              user: userId,
              createdAt: {
                $gte: gte,
                $lte: lte
              },
              amount: {
                $gt: 0
              }
            }
          },
          {
            $group: {
              _id: null,
              average: {
                $avg: '$amount'
              }
            }
          }
        ],
        expanse: [
          {
            $match: {
              user: userId,
              createdAt: {
                $gte: gte,
                $lte: lte
              },
              amount: {
                $lt: 0
              }
            }
          },
          {
            $group: {
              _id: null,
              average: {
                $avg: '$amount'
              }
            }
          }
        ]
      }
    }
  ])

  const income: number = response[0]?.income[0]?.average ?? 0
  const expanse: number = response[0]?.expanse[0]?.average ?? 0

  const result: ResponseAnalytics = {
    income,
    expanse
  }

  return result
}
