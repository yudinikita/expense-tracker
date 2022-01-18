const { AuthenticationError, ForbiddenError, ApolloError } = require('apollo-server-express')
const TransactionService = require('../../../service/transaction.service')

module.exports = {
  Query: {
    transactions: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const id = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await TransactionService.getTransactions(id, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    transactionDetail: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const transactionId = args?.transactionId
        return await TransactionService.getTransactionDetail(userId, transactionId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    searchTransaction: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const query = args?.query
        return await TransactionService.getSearchTransaction(userId, query)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
  },
  Mutation: {
    createTransaction: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const transaction = args?.transaction
        return await TransactionService.createTransaction(userId, transaction)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    deleteTransaction: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const transactionId = args?.id
        return await TransactionService.deleteTransaction(transactionId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    updateTransaction: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const transactionId = args?.id
        const transaction = args?.transaction
        return await TransactionService.updateTransaction(transactionId, transaction)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
  },
  Transaction: {
    id (transaction) {
      return transaction?._id
    }
  }
}
