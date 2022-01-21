import { ApolloError } from 'apollo-server-fastify'
import { withAuth } from '../../../utils/auth.js'
import CategoryService from '../../../service/category.service.js'

export default {
  Query: {
    categories: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        return await CategoryService.getCategories(userId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    })
  },
  Mutation: {
    createCategory: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const userId = user?.id
        const category = args?.category
        return await CategoryService.createCategory(userId, category)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    updateCategory: withAuth(async (root, args, context, info) => {
      try {
        const categoryId = args?.id
        const category = args?.category
        return await CategoryService.updateCategory(categoryId, category)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    deleteCategory: withAuth(async (root, args, context, info) => {
      try {
        const categoryId = args?.id
        return await CategoryService.deleteCategory(categoryId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    deleteCategoryReplace: withAuth(async (root, args, context, info) => {
      try {
        const categoryId = args?.id
        const newCategoryId = args?.newId
        return await CategoryService.deleteCategoryReplace(categoryId, newCategoryId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    deleteCategoryWithTransactions: withAuth(async (root, args, context, info) => {
      try {
        const categoryId = args?.id
        return await CategoryService.deleteCategoryWithTransactions(categoryId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    })
  },
  Category: {
    id (category) {
      return category._id
    }
  }
}
