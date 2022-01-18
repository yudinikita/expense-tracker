import { createModule } from 'graphql-modules'
import TypeDefs from './transaction.type.graphql.js'
import Resolvers from './transaction.resolver.graphql.js'

export default createModule({
  id: 'transaction-module',
  dirname: import.meta.url,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers],
})
