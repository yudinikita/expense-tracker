import { TransactionModel } from '../../models/index.js'
import { SearchTransactionInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const getSearchTransaction = async (userId: string, input: SearchTransactionInput): Promise<any> => {
  const query = input?.query

  if (query === undefined) return []

  const patternFind = /[^A-Za-zА-Яа-яЁё0-9]+/g
  const querySearch = query.replace(patternFind, '')

  if (querySearch === undefined) return []

  const amount = parseInt(querySearch) ?? null
  const commentary = String(querySearch) ?? null

  const transactionsFetched =
    await TransactionModel
      .find({
        user: toObjectId(userId),
        $or: [
          { amount: amount },
          { commentary: { $regex: commentary } }
        ]
      })
      .sort({ createdAt: -1 })
      .populate('category')

  return transactionsFetched.map(transaction => {
    const createdAt = new Date(transaction.createdAt).toISOString()
    const updatedAt = new Date(transaction.updatedAt).toISOString()

    return {
      ...transaction.toJSON(),
      createdAt,
      updatedAt
    }
  })
}
