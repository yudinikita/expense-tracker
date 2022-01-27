import { GraphQLSchema } from 'graphql'
import { application } from '../../graphql/application.js'

export const schema: GraphQLSchema = application.createSchemaForApollo()
