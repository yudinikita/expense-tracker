const { createModule } = require('graphql-modules')
const TypeDefs = require('./transaction.type.graphql')
const Resolvers = require('./transaction.resolver.graphql')

module.exports = createModule({
  id: 'transaction-module',
  dirname: __dirname,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers],
})
