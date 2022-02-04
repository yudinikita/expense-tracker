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
        const input = args?.input
        return await getTransactions(userId, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    transactionDetail: async (_root, args, context, _info) => {
      try {
        const userId = context.user.id
        const input = args?.input
        return await getTransactionDetail(userId, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    searchTransaction: async (_root, args, context, _info) => {
      try {
        const userId = context.user.id
        const input = args?.input
        return await getSearchTransaction(userId, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  },
  Mutation: {
    createTransaction: async (_root, args, context, _info) => {
      try {
        const userId = context.user.id
        const input = args?.input
        return await createTransaction(userId, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    deleteTransaction: async (_root, args, _context, _info) => {
      try {
        const input = args?.input
        return await deleteTransaction(input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    updateTransaction: async (_root, args, _context, _info) => {
      try {
        const input = args?.input
        return await updateTransaction(input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  },
  Transaction: {
    id: parent => {
      // @ts-expect-error
      return parent._id
    }
  }
}
