import { createModule } from 'graphql-modules'
import TypeDefs from './analytic.type.graphql.js'
import Resolvers from './analytic.resolver.graphql.js'

export default createModule({
  id: 'analytic-module',
  dirname: import.meta.url,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers],
})
