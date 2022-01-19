import { createModule } from 'graphql-modules'
import CategoryType from './category.type.graphql.js'
import CategoryResolvers from './category.resolver.graphql.js'

export default createModule({
  id: 'category-module',
  dirname: import.meta.url,
  typeDefs: [CategoryType],
  resolvers: [CategoryResolvers]
})
