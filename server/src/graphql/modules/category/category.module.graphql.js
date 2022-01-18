const { createModule } = require('graphql-modules')
const CategoryType = require('./category.type.graphql')
const CategoryResolvers = require('./category.resolver.graphql')

module.exports = createModule({
  id: 'category-module',
  dirname: __dirname,
  typeDefs: [CategoryType],
  resolvers: [CategoryResolvers],
})
