import { TransactionModel } from '../../models/index.js'
import { Types } from 'mongoose'

export const deleteManyTransaction = async (categoryId: Types.ObjectId) => {
  const result = await TransactionModel.deleteMany({ category: categoryId })
  return result.deletedCount === 1
}
