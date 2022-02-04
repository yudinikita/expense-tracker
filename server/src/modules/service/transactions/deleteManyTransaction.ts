import { TransactionModel } from '../../models/index.js'
import { Types } from 'mongoose'

export const deleteManyTransaction = async (categoryId: Types.ObjectId): Promise<boolean> => {
  const result = await TransactionModel.deleteMany({ category: categoryId })
  return result.deletedCount === 1
}
