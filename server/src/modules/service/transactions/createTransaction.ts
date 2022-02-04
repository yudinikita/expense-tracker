import { TransactionModel } from '../../models/index.js'
import { Transaction, TransactionInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const createTransaction = async (userId: string, input: TransactionInput): Promise<Transaction> => {
  const newTransaction = await new TransactionModel({ ...input, user: toObjectId(userId) })

  await newTransaction.save()

  const populateTransaction = await newTransaction.populate('category')

  return populateTransaction.toJSON()
}
