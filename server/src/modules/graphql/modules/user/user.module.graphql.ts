import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createModule, ModuleConfig } from 'graphql-modules'
import { typeDefs } from './user.type.graphql.js'
import { resolvers } from './user.resolver.graphql.js'

const _dirname = dirname(fileURLToPath(import.meta.url))

const configModule: ModuleConfig = {
  id: 'user-module',
  dirname: _dirname,
  typeDefs: typeDefs,
  resolvers: resolvers
}

export default createModule(configModule)
