import { TransactionModel } from '../../models/index.js'
import { TransactionInput } from '../../graphql/__generated__/graphql.types.gen.js'
import pkg from 'mongoose'

const { Types } = pkg

export const createTransaction = async (id: string, transaction?: TransactionInput): Promise<any> => {
  const userId = new Types.ObjectId(id)

  const newTransaction = new TransactionModel({ ...transaction, user: userId })
  await newTransaction.save()
  const populateTransaction = await newTransaction.populate('category')

  const createdAt = new Date(populateTransaction._doc.createdAt).toISOString()
  const updatedAt = new Date(populateTransaction._doc.updatedAt).toISOString()

  return {
    ...populateTransaction._doc,
    _id: populateTransaction.id,
    createdAt,
    updatedAt
  }
}
