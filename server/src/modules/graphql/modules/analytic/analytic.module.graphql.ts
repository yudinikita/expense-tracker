import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createModule, ModuleConfig } from 'graphql-modules'
import { typeDefs } from './analytic.type.graphql.js'
import { resolvers } from './analytic.resolver.graphql.js'
import { authMiddleware } from '../../middlewares/index.js'

const _dirname = dirname(fileURLToPath(import.meta.url))

const moduleConfig: ModuleConfig = {
  id: 'analytic-module',
  dirname: _dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
  middlewares: {
    '*': {
      '*': [authMiddleware]
    }
  }
}

export default createModule(moduleConfig)
