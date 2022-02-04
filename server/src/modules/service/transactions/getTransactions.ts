import { TransactionModel } from '../../models/index.js'
import { Transaction, TransactionFilter, TransactionsInput } from '../../graphql/__generated__/graphql.types.gen.js'

export const getTransactions = async (userId: string, input?: TransactionsInput | null): Promise<Transaction[]> => {
  const filter = input?.filter ? filterBuilder(input.filter) : {}

  const transactionsFetched = await TransactionModel
    .find({
      user: userId,
      ...filter
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

const filterBuilder = (filter: TransactionFilter): object => {
  const f1 = { $gte: filter?.gte }
  const f2 = { $lte: filter?.lte }

  if (filter?.gte !== undefined && filter?.gte !== null
    && filter?.lte !== undefined && filter?.lte !== null) {
    return {
      createdAt: {
        $gte: new Date(filter.gte),
        $lte: filter?.lte
      }
    }
  } else if (filter?.gte !== undefined) {
    return { createdAt: { f1 } }
  } else if (filter?.lte !== undefined) {
    return { createdAt: { f2 } }
  }

  return {}
}
