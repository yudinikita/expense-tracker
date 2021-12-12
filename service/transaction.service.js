const TransactionModel = require('../models/Transactions')

class TransactionService {

  async getTransactions (user, startDate, endDate) {
    const transactionsFetched
      = await TransactionModel
      .find({
        user,
        createdAt: {
          $gte: startDate,
          $lte: endDate
        }
      })
      .sort({ createdAt: -1 })
      .populate('category')

    return await transactionsFetched.map(transaction => {
      const createdAt = new Date(transaction._doc.createdAt).toISOString()
      const updatedAt = new Date(transaction._doc.updatedAt).toISOString()

      return {
        ...transaction._doc,
        _id: transaction.id,
        createdAt,
        updatedAt,
      }
    })
  }

  async getTransactionDetail (user, _id) {
    const transactionFetched = await TransactionModel.findOne({ user, _id }).populate('category')

    const createdAt = new Date(transactionFetched._doc.createdAt).toISOString()
    const updatedAt = new Date(transactionFetched._doc.updatedAt).toISOString()

    return {
      ...transactionFetched._doc,
      _id: transactionFetched.id,
      createdAt,
      updatedAt,
    }
  }

  async getSearchTransaction (user, query) {
    if (!query) return null

    const patternFind = /[^A-Za-zА-Яа-яЁё0-9]+/g
    const querySearch = query.replace(patternFind, '')

    if (!querySearch) return null

    const amount = parseInt(querySearch) || null
    const commentary = String(querySearch) || null

    const transactionsFetched
      = await TransactionModel
      .find({
        user,
        $or: [
          { amount: amount },
          { commentary: { $regex: commentary } }
        ]
      })
      .sort({ createdAt: -1 })
      .populate('category')

    return await transactionsFetched.map(transaction => {
      const createdAt = new Date(transaction._doc.createdAt).toISOString()
      const updatedAt = new Date(transaction._doc.updatedAt).toISOString()

      return {
        ...transaction._doc,
        _id: transaction.id,
        createdAt,
        updatedAt,
      }
    })
  }

  async createTransaction (user, transaction) {
    const newTransaction = new TransactionModel({ user, ...transaction })
    await newTransaction.save()
    const populateTransaction = await newTransaction.populate('category')

    const createdAt = new Date(populateTransaction._doc.createdAt).toISOString()
    const updatedAt = new Date(populateTransaction._doc.updatedAt).toISOString()

    return {
      ...populateTransaction._doc,
      _id: populateTransaction.id,
      createdAt,
      updatedAt,
    }
  }

  async deleteTransaction (_id) {
    const deletedTransaction = await TransactionModel.deleteOne({ _id })

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

  async deleteManyTransaction (category) {
    const result = await TransactionModel.deleteMany({ category })
    return result.deletedCount === 1
  }

  async updateTransaction (_id, transaction) {
    return TransactionModel.findOneAndUpdate(
      { _id },
      { $set: { ...transaction } },
      { returnOriginal: false }
    ).populate('category')
  }

  async updateTransactionsByCategory (oldCategory, newCategory) {
    return TransactionModel.updateMany(
      { category: oldCategory },
      { $set: { category: newCategory } }
    )
  }

}

module.exports = new TransactionService()
