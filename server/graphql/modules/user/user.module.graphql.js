const { createModule } = require('graphql-modules')
const TypeDefs = require('./user.type.graphql')
const Resolvers = require('./user.resolver.graphql')

module.exports = createModule({
  id: 'user-module',
  dirname: __dirname,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers],
})
