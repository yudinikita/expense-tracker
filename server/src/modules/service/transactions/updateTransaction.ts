import pkg from 'mongoose'
import { TransactionModel } from '../../models/index.js'
import { TransactionInput } from '../../graphql/__generated__/graphql.types.gen.js'

const { Types } = pkg

export const updateTransaction = async (id: string, transaction?: TransactionInput): Promise<any> => {
  const transactionId = new Types.ObjectId(id)

  return await TransactionModel.findOneAndUpdate(
    { _id: transactionId },
    { $set: { ...transaction } },
    { returnOriginal: false }
  ).populate('category')
}
