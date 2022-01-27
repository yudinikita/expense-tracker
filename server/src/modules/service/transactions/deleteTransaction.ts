import pkg from 'mongoose'
import { TransactionModel } from '../../models/index.js'

const { Types } = pkg

export const deleteTransaction = async (id: string): Promise<any> => {
  const transactionId = new Types.ObjectId(id)
  const deletedTransaction = await TransactionModel.deleteOne({ _id: transactionId })

  const isDeleted = deletedTransaction.deletedCount === 1
  if (isDeleted) {
    return {
      code: 200,
      success: true,
      message: 'Операция удалена'
    }
  } else {
    return {
      code: 200,
      success: false,
      message: 'Операция не удалена'
    }
  }
}
