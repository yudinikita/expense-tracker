import { TransactionModel } from '../../models/index.js'
import { Transaction, TransactionFilter, TransactionsInput } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const getTransactions = async (userId: string, input?: TransactionsInput | null): Promise<Transaction[]> => {
  let filter = {}

  if (input?.filter !== undefined && input?.filter !== null) {
    filter = filterBuilder(input.filter)
  }

  const transactionsFetched = await TransactionModel
    .find({
      user: toObjectId(userId),
      ...filter
    })
    .sort({ createdAt: -1 })
    .populate('category')

  return transactionsFetched
}

const filterBuilder = (filter: TransactionFilter): object => {
  let filterOutput = {}

  const gte = filter?.gte
  const lte = filter?.lte

  if (gte !== undefined && gte !== null &&
    lte !== undefined && lte !== null) {
    filterOutput = {
      createdAt: {
        $gte: new Date(gte),
        $lte: new Date(lte)
      }
    }
  } else if (gte !== undefined && gte !== null) {
    filterOutput = { createdAt: { $gte: new Date(gte) } }
  } else if (lte !== undefined && lte !== null) {
    filterOutput = { createdAt: { $gte: new Date(lte) } }
  }

  return filterOutput
}
