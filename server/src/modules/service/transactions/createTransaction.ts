import { TransactionModel } from '../../models/index.js'
import { TransactionInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const createTransaction = async (userId: string, input: TransactionInput): Promise<any> => {
  const newTransaction = await new TransactionModel({ ...input, user: toObjectId(userId) })

  await newTransaction.save()

  const populateTransaction = await newTransaction.populate('category')

  const createdAt = new Date(populateTransaction.createdAt).toISOString()
  const updatedAt = new Date(populateTransaction.updatedAt).toISOString()

  return {
    ...populateTransaction.toJSON(),
    createdAt,
    updatedAt
  }
}
