import { TransactionModel } from '../../models/index.js'
import { DeleteTransactionInput, DeleteTransactionPayload } from '../../graphql/__generated__/graphql.types.gen.js'
import { toObjectId } from '../../utils/index.js'

export const deleteTransaction = async (input: DeleteTransactionInput): Promise<DeleteTransactionPayload> => {
  const deletedTransaction = await TransactionModel.deleteOne({ _id: toObjectId(input.id) })

  const isDeleted = deletedTransaction.deletedCount === 1

  if (isDeleted) {
    return {
      success: true,
      message: 'Операция удалена'
    }
  } else {
    return {
      success: false,
      message: 'Операция не удалена'
    }
  }
}
