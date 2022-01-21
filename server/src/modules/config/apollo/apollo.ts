import { Config } from 'apollo-server-fastify'
import { schema } from './schema.js'
import { context } from './context.js'

export const apolloConfig: Config = {
  schema,
  context
}
