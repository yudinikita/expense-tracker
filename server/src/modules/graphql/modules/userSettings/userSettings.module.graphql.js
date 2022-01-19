import { createModule } from 'graphql-modules'
import TypeDefs from './userSettings.type.graphql.js'
import Resolvers from './userSettings.resolver.graphql.js'

export default createModule({
  id: 'userSettings-module',
  dirname: import.meta.url,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers]
})
