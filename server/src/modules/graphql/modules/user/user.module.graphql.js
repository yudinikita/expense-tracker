import { createModule } from 'graphql-modules'
import TypeDefs from './user.type.graphql.js'
import Resolvers from './user.resolver.graphql.js'

export default createModule({
  id: 'user-module',
  dirname: import.meta.url,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers],
})
