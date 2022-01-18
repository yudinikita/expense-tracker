const { createModule } = require('graphql-modules')
const TypeDefs = require('./help.type.graphql')
const Resolvers = require('./help.resolver.graphql')

module.exports = createModule({
  id: 'help-module',
  dirname: __dirname,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers],
})
