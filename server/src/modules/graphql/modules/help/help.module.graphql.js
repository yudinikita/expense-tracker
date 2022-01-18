import { createModule } from 'graphql-modules'
import TypeDefs from './help.type.graphql.js'
import Resolvers from './help.resolver.graphql.js'

export default createModule({
  id: 'help-module',
  dirname: import.meta.url,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers],
})
