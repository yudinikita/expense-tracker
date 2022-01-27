import { TransactionModel } from '../../models/index.js'
import pkg from 'mongoose'

const { Types } = pkg

export const updateTransactionsByCategory = async (id: string, newId: string): Promise<any> => {
  const categoryId = new Types.ObjectId(id)
  const newCategoryId = new Types.ObjectId(newId)

  return await TransactionModel.updateMany(
    { category: categoryId },
    { $set: { category: newCategoryId } }
  )
}
