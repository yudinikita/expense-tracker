import { ApolloError } from 'apollo-server-fastify'
import { withAuth } from '../../../utils/auth.js'
import TransactionService from '../../../service/transaction.service.js'

export default {
  Query: {
    transactions: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const id = user?.id
        const startDate = args?.startDate
        const endDate = args?.endDate
        return await TransactionService.getTransactions(id, startDate, endDate)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    transactionDetail: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const transactionId = args?.transactionId
        return await TransactionService.getTransactionDetail(userId, transactionId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    searchTransaction: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const query = args?.query
        return await TransactionService.getSearchTransaction(userId, query)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    })
  },
  Mutation: {
    createTransaction: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const transaction = args?.transaction
        return await TransactionService.createTransaction(userId, transaction)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    deleteTransaction: withAuth(async (root, args, context, info) => {
      try {
        const transactionId = args?.id
        return await TransactionService.deleteTransaction(transactionId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    updateTransaction: withAuth(async (root, args, context, info) => {
      try {
        const transactionId = args?.id
        const transaction = args?.transaction
        return await TransactionService.updateTransaction(transactionId, transaction)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    })
  },
  Transaction: {
    id (transaction) {
      return transaction?._id
    }
  }
}
