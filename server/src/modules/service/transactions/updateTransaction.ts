import { TransactionModel } from '../../models/index.js'
import { UpdateTransactionInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const updateTransaction = async (input: UpdateTransactionInput): Promise<any> => {
  return await TransactionModel.findOneAndUpdate(
    { _id: toObjectId(input.id) },
    { $set: { ...input.transaction } },
    { returnDocument: 'after' }
  ).populate('category')
}
