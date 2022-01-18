const { createModule } = require('graphql-modules')
const TypeDefs = require('./analytic.type.graphql')
const Resolvers = require('./analytic.resolver.graphql')

module.exports = createModule({
  id: 'analytic-module',
  dirname: __dirname,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers],
})
