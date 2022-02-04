import { TransactionModel } from '../../models/index.js'
import { toObjectId } from '../../utils/index.js'

export const updateTransactionsByCategory = async (id: string, newId: string): Promise<void> => {
  await TransactionModel.updateMany(
    { category: toObjectId(id) },
    { $set: { category: toObjectId(newId) } }
  )
}
