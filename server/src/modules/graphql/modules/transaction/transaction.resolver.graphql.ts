import { ApolloError } from 'apollo-server-fastify'
import constants from '../../../constants/constants.js'
import { Resolvers } from '../../__generated__/graphql.types.gen.js'
import {
  createTransaction,
  deleteTransaction,
  getSearchTransaction,
  getTransactionDetail,
  getTransactions,
  updateTransaction
} from '../../../service/transactions/index.js'

export const resolvers: Resolvers = {
  Query: {
    transactions: async (_root, args, context, _info) => {
      try {
        const userId = context.user.id
        const startDate = args.startDate ?? ''
        const endDate = args.endDate ?? ''
        return await getTransactions(userId, startDate, endDate)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    transactionDetail: async (_root, args, context, _info) => {
      try {
        const userId = context.user.id
        const transactionId = args?.transactionId ?? ''
        return await getTransactionDetail(userId, transactionId)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    searchTransaction: async (_root, args, context, _info) => {
      try {
        const userId = context.user.id
        const query = args?.query ?? ''
        return await getSearchTransaction(userId, query)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  },
  Mutation: {
    createTransaction: async (_root, args, context, _info) => {
      try {
        const userId = context.user.id
        const transaction = args?.transaction ?? undefined
        return await createTransaction(userId, transaction)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    deleteTransaction: async (_root, args, _context, _info) => {
      try {
        const transactionId = args?.id ?? ''
        return await deleteTransaction(transactionId)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    updateTransaction: async (_root, args, _context, _info) => {
      try {
        const transactionId = args?.id ?? ''
        const transaction = args.transaction ?? undefined
        return await updateTransaction(transactionId, transaction)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  }
}
