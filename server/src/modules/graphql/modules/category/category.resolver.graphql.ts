import { ApolloError } from 'apollo-server-fastify'
import constants from '../../../constants/constants.js'
import { Resolvers } from '../../__generated__/graphql.types.gen.js'
import {
  createCategory,
  deleteCategory,
  deleteCategoryReplace,
  deleteCategoryWithTransactions,
  getCategories,
  updateCategory
} from '../../../service/category/index.js'

export const resolvers: Resolvers = {
  Query: {
    categories: async (_root, _args, context, _info) => {
      try {
        const user = context?.user
        return await getCategories(user)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  },
  Mutation: {
    createCategory: async (_root, args, context, _info) => {
      try {
        const user = context.user
        const input = args.input
        return await createCategory(user, input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    updateCategory: async (_root, args, _context, _info) => {
      try {
        const categoryId = args?.id
        const category = args.input
        return await updateCategory(categoryId, category)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    deleteCategory: async (_root, args, _context, _info) => {
      try {
        const input = args.input
        return await deleteCategory(input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    deleteCategoryReplace: async (_root, args, _context, _info) => {
      try {
        const input = args.input
        return await deleteCategoryReplace(input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    },
    deleteCategoryWithTransactions: async (_root, args, _context, _info) => {
      try {
        const input = args.input
        return await deleteCategoryWithTransactions(input)
      } catch (error) {
        throw new ApolloError(constants.GRAPHQL.MESSAGE.RESOLVER_ERROR)
      }
    }
  },
  Category: {
    id: (parent) => {
      // @ts-expect-error
      return parent._id
    }
  }
}
