import { Middleware, MiddlewareContext } from 'graphql-modules'
import { Next } from 'graphql-modules/shared/middleware.js'
import { AuthenticationError, ForbiddenError } from 'apollo-server-fastify'
import constants from '../../../constants/constants.js'

export const authMiddleware: Middleware = async ({ context }: MiddlewareContext, next: Next) => {
  if (context?.user === null || context?.user === undefined) {
    throw new AuthenticationError(constants.GRAPHQL.MESSAGE.AUTH_ERROR)
  }

  if (context?.user?.isActivated === null || context?.user?.isActivated === undefined) {
    throw new ForbiddenError(constants.GRAPHQL.MESSAGE.FORBIDDEN_ERROR)
  }

  return await next()
}
