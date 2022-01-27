import { TransactionModel } from '../../models/index.js'
import pkg from 'mongoose'

const { Types } = pkg

export const getSearchTransaction = async (id: string, query: string): Promise<any> => {
  const userId = new Types.ObjectId(id)
  if (query === null) return null

  const patternFind = /[^A-Za-zА-Яа-яЁё0-9]+/g
  const querySearch = query.replace(patternFind, '')

  if (querySearch === null) return null

  const amount = parseInt(querySearch) ?? null
  const commentary = String(querySearch) ?? null

  const transactionsFetched =
    await TransactionModel
      .find({
        user: userId,
        $or: [
          { amount: amount },
          { commentary: { $regex: commentary } }
        ]
      })
      .sort({ createdAt: -1 })
      .populate('category')

  return transactionsFetched.map(transaction => {
    const createdAt = new Date(transaction.createdAt).toISOString()
    const updatedAt = new Date(transaction.updatedAt).toISOString()

    return {
      ...transaction.toJSON(),
      _id: transaction.id,
      createdAt,
      updatedAt
    }
  })
}
