import { TransactionModel } from '../../models/index.js'
import { Transaction, UpdateTransactionInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const updateTransaction = async (input: UpdateTransactionInput): Promise<Transaction> => {
  const updatedTransaction = await TransactionModel.findOneAndUpdate(
    { _id: toObjectId(input.id) },
    { $set: { ...input.transaction } },
    { returnDocument: 'after' }
  ).populate('category')

  return {
    ...updatedTransaction.toJSON(),
    category: {
      ...updatedTransaction.category.toJSON(),
      id: updatedTransaction.category._id
    }
  }
}
