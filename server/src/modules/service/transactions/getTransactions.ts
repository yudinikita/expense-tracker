import { TransactionModel } from '../../models/index.js'
import pkg from 'mongoose'

const { Types } = pkg

export const getTransactions = async (id: string, startDate: string, endDate: string): Promise<any> => {
  const userId = new Types.ObjectId(id)
  const transactionsFetched =
    await TransactionModel
      .find({
        user: userId,
        createdAt: {
          $gte: startDate,
          $lte: endDate
        }
      })
      .sort({ createdAt: -1 })
      .populate('category')

  return transactionsFetched.map(transaction => {
    const createdAt = new Date(transaction._doc.createdAt).toISOString()
    const updatedAt = new Date(transaction._doc.updatedAt).toISOString()

    return {
      ...transaction._doc,
      _id: transaction.id,
      createdAt,
      updatedAt
    }
  })
}
