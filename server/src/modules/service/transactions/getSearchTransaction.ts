import { TransactionModel } from '../../models/index.js'
import { SearchTransactionInput, Transaction } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const getSearchTransaction = async (userId: string, input: SearchTransactionInput): Promise<Transaction[]> => {
  const query = input?.query

  if (query === undefined || query === null || query === '') return []

  const patternFind = /[^A-Za-zА-Яа-яЁё0-9]+/g
  const querySearch = query.replace(patternFind, '')

  if (querySearch === undefined || querySearch === null || querySearch === '') return []

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

  return transactionsFetched
}
