const TransactionModel = require('../models/Transactions')
const { Types } = require('mongoose')

class AnalyticsService {

  async getAnalyticsBalance (user, startDate, endDate) {
    user = Types.ObjectId(user)
    startDate = new Date(startDate)
    endDate = new Date(endDate)

    const transactionsIncome = await TransactionModel.aggregate(
      [
        {
          $match: {
            user,
            createdAt: {
              $gte: startDate,
              $lte: endDate
            },
            amount: { $gt: 0 }
          }
        },
        {
          $group:
            {
              _id: '$user',
              totalAmount: { $sum: '$amount' }
            }
        }
      ]
    )

    const transactionsExpense = await TransactionModel.aggregate(
      [
        {
          $match: {
            user,
            amount: { $lt: 0 },
            createdAt: {
              $gte: startDate,
              $lte: endDate
            }
          }
        },
        {
          $group:
            {
              _id: '$user',
              totalAmount: { $sum: '$amount' }
            }
        }
      ]
    )

    const income = typeof transactionsIncome[0] === 'undefined' ? 0 : transactionsIncome[0].totalAmount
    const expense = typeof transactionsExpense[0] === 'undefined' ? 0 : transactionsExpense[0].totalAmount
    const remainder = income - Math.abs(expense)

    return { income, expense, remainder }
  }

  async getAnalyticsAverage (user, startDate, endDate) {
    user = Types.ObjectId(user)
    startDate = new Date(startDate)
    endDate = new Date(endDate)

    const transactionsIncome = await TransactionModel.aggregate(
      [
        {
          $match: {
            user,
            createdAt: {
              $gte: startDate,
              $lte: endDate
            },
            amount: { $gt: 0 }
          }
        },
        {
          $group:
            {
              _id: '$user',
              average: { $avg: '$amount' }
            }
        }
      ]
    )

    const transactionsExpense = await TransactionModel.aggregate(
      [
        {
          $match: {
            user,
            createdAt: {
              $gte: startDate,
              $lte: endDate
            },
            amount: { $lt: 0 }
          }
        },
        {
          $group:
            {
              _id: '$user',
              average: { $avg: '$amount' }
            }
        }
      ]
    )

    const income = typeof transactionsIncome[0] === 'undefined' ? 0 : Math.round(transactionsIncome[0].average)
    const expense = typeof transactionsExpense[0] === 'undefined' ? 0 : Math.round(transactionsExpense[0].average)
    const remainder = income - expense

    return { income, expense, remainder }
  }

  async getAnalyticsExpense (user, startDate, endDate) {
    user = Types.ObjectId(user)
    startDate = new Date(startDate)
    endDate = new Date(endDate)

    const transactionsExpense = await TransactionModel.aggregate(
      [
        {
          $match: {
            user,
            createdAt: {
              $gte: startDate,
              $lte: endDate
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
            from: 'categories',       // other table name
            localField: '_id',   // name of users table field
            foreignField: '_id', // name of userinfo table field
            as: 'categories'         // alias for userinfo table
          }
        },
        { $unwind: '$categories' },
        {
          $project: {
            _id: 0,
            category: {
              _id: '$categories._id',
              title: '$categories.title'
            },
            amount: 1
          }
        },
        { $sort: { amount: 1 } }
      ]
    )

    return transactionsExpense
  }

  async getAnalyticsIncome (user, startDate, endDate) {
    user = Types.ObjectId(user)
    startDate = new Date(startDate)
    endDate = new Date(endDate)

    const transactionsIncome = await TransactionModel.aggregate(
      [
        {
          $match: {
            user,
            createdAt: {
              $gte: startDate,
              $lte: endDate
            },
            amount: { $gt: 0 }
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
            from: 'categories',       // other table name
            localField: '_id',   // name of users table field
            foreignField: '_id', // name of userinfo table field
            as: 'categories'         // alias for userinfo table
          }
        },
        { $unwind: '$categories' },
        {
          $project: {
            _id: 0,
            category: {
              _id: '$categories._id',
              title: '$categories.title'
            },
            amount: 1
          }
        },
        { $sort: { amount: -1 } }
      ]
    )

    return transactionsIncome
  }

}

module.exports = new AnalyticsService()
