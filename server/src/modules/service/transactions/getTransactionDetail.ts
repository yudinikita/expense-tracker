import { TransactionModel } from '../../models/index.js'
import pkg from 'mongoose'

const { Types } = pkg

export const getTransactionDetail = async (userId: string, transactionId: string): Promise<any> => {
  const _userId = new Types.ObjectId(userId)
  const _transactionId = new Types.ObjectId(transactionId)

  const transactionFetched = await TransactionModel.findOne({
    user: _userId,
    _id: _transactionId
  }).populate('category')

  const createdAt = new Date(transactionFetched.createdAt).toISOString()
  const updatedAt = new Date(transactionFetched.updatedAt).toISOString()

  return {
    ...transactionFetched,
    _id: transactionFetched.id,
    createdAt,
    updatedAt
  }
}
