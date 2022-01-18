const CategoryService = require('../../../service/category.service')
const { AuthenticationError, ForbiddenError, ApolloError } = require('apollo-server-express')

module.exports = {
  Query: {
    categories: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        return await CategoryService.getCategories(userId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }
  },
  Mutation: {
    createCategory: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const userId = user?.id
        const category = args?.category
        return await CategoryService.createCategory(userId, category)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    updateCategory: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const categoryId = args?.id
        const category = args?.category
        return await CategoryService.updateCategory(categoryId, category)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    deleteCategory: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const categoryId = args?.id
        return await CategoryService.deleteCategory(categoryId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    deleteCategoryReplace: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const categoryId = args?.id
        const newCategoryId = args?.newId
        return await CategoryService.deleteCategoryReplace(categoryId, newCategoryId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
    deleteCategoryWithTransactions: async (root, args, context, info) => {
      const user = context?.user
      if (!user) throw new AuthenticationError('Ошибка авторизации')
      if (!user?.isActivated) throw new ForbiddenError('Аккаунт не активирован')
      try {
        const categoryId = args?.id
        return await CategoryService.deleteCategoryWithTransactions(categoryId)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    },
  },
  Category: {
    id (category) {
      return category._id
    }
  }
}
