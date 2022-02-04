import { TransactionModel } from '../../models/index.js'
import { Transaction, TransactionDetailInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const getTransactionDetail = async (userId: string, input: TransactionDetailInput): Promise<Transaction> => {
  const transactionFetched = await TransactionModel.findOne({
    user: toObjectId(userId),
    _id: toObjectId(input.id)
  }).populate('category')

  // const createdAt = new Date(transactionFetched.createdAt).toISOString()
  // const updatedAt = new Date(transactionFetched.updatedAt).toISOString()

  return transactionFetched.toJSON()
}
