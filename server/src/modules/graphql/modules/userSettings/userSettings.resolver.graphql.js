import { ApolloError } from 'apollo-server-fastify'
import { withAuth } from '../../../utils/auth.js'
import UserService from '../../../service/auth/user.service.js'

export default {
  Query: {
    userSettings: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const id = user?.id
        return await UserService.getUserSettings(id)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    })
  },
  Mutation: {
    updateUserSettings: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const id = user?.id
        const settings = args?.settings
        return await UserService.updateUserSettings(id, settings)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    }),
    updateUserPassword: withAuth(async (root, args, context, info) => {
      try {
        const user = context?.user
        const id = user?.id
        const userPasswordInput = args?.userPasswordInput
        return await UserService.updateUserPassword(id, userPasswordInput)
      } catch (error) {
        throw new ApolloError('Упс, произошла ошибка.')
      }
    })
  }
}
