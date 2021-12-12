const TransactionModel = require('../models/Transactions')
const { Types } = require('mongoose')

class BalanceService {

  async getBalance (user) {
    user = Types.ObjectId(user)
    const balanceFetched = await TransactionModel.aggregate(
      [
        { $match: { user } },
        {
          $group:
            {
              _id: '$user',
              totalAmount: { $sum: '$amount' },
              count: { $sum: 1 }
            }
        },
        {
          $project:
            {
              _id: 0,
              totalAmount: 1,
              count: 1
            }
        },
        { $limit: 1 }
      ]
    )

    let balance = balanceFetched[0]
    if (!balance) {
      balance = {
        totalAmount: 0,
        count: 0
      }
    }

    return balance
  }

  async getBalancePerDate (user, startDate, endDate) {
    user = Types.ObjectId(user)
    startDate = new Date(startDate)
    endDate = new Date(endDate)

    const balancePerDateFetched = await TransactionModel.aggregate(
      [
        {
          $match: {
            user,
            'createdAt': {
              $gte: startDate,
              $lte: endDate
            }
          }
        },
        {
          $group:
            {
              _id: '$user',
              totalAmount: { $sum: '$amount' },
              count: { $sum: 1 }
            }
        },
        {
          $project:
            {
              _id: 0,
              totalAmount: 1,
              count: 1
            }
        },
        { $limit: 1 }
      ]
    )

    let balancePerDate = balancePerDateFetched[0]
    if (!balancePerDate) {
      balancePerDate = {
        totalAmount: 0,
        count: 0
      }
    }

    return balancePerDate
  }

}

module.exports = new BalanceService()
