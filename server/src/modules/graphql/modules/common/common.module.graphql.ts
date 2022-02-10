import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { createModule, ModuleConfig } from 'graphql-modules'
import { typeDefs } from './common.type.graphql.js'

const _dirname = dirname(fileURLToPath(import.meta.url))

const configModule: ModuleConfig = {
  id: 'common-module',
  dirname: _dirname,
  typeDefs: typeDefs
}

export default createModule(configModule)
