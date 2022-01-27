import { createModule, ModuleConfig } from 'graphql-modules'
import { typeDefs } from './category.type.graphql.js'
import { resolvers } from './category.resolver.graphql.js'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { authMiddleware } from '../../middlewares/index.js'

const _dirname = dirname(fileURLToPath(import.meta.url))

const moduleConfig: ModuleConfig = {
  id: 'category-module',
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
