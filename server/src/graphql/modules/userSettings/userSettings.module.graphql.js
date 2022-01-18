const { createModule } = require('graphql-modules')
const TypeDefs = require('./userSettings.type.graphql')
const Resolvers = require('./userSettings.resolver.graphql')

module.exports = createModule({
  id: 'userSettings-module',
  dirname: __dirname,
  typeDefs: [TypeDefs],
  resolvers: [Resolvers],
})
