import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createModule } from 'graphql-modules'
import { typeDefs } from './help.type.graphql.js'
import { resolvers } from './help.resolver.graphql.js'
import { authMiddleware } from '../../middlewares/index.js'

const _dirname = dirname(fileURLToPath(import.meta.url))

const configModule = {
  id: 'help-module',
  dirname: _dirname,
  typeDefs: typeDefs,
  resolvers: resolvers,
  middlewares: {
    '*': {
      '*': [authMiddleware]
    }
  }
}

export default createModule(configModule)
