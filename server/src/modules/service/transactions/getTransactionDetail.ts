import { TransactionModel } from '../../models/index.js'
import { TransactionDetailInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const getTransactionDetail = async (userId: string, input: TransactionDetailInput): Promise<any> => {
  const transactionFetched = await TransactionModel.findOne({
    user: toObjectId(userId),
    _id: input.id
  }).populate('category')

  const createdAt = new Date(transactionFetched.createdAt).toISOString()
  const updatedAt = new Date(transactionFetched.updatedAt).toISOString()

  return {
    ...transactionFetched.toJSON(),
    createdAt,
    updatedAt
  }
}
