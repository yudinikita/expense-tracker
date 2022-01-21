import fastify, { FastifyInstance } from 'fastify'
import fastifyCompress from 'fastify-compress'
import fastifyStatic from 'fastify-static'
import fastifyCors from 'fastify-cors'
import fastifyHelmet from 'fastify-helmet'
import { corsOptions } from './config/cors/index.js'
import { fastifyOptions } from './config/fastify/index.js'
import { staticOptions, staticRoute } from './config/static/static.js'

const buildApp = async (): Promise<FastifyInstance> => {
  const app: FastifyInstance = fastify(fastifyOptions)

  await app.register(fastifyCompress)
  await app.register(fastifyCors, corsOptions)
  await app.register(fastifyHelmet)

  if (process.env['NODE_ENV'] === 'production') {
    await app.register(fastifyStatic, staticOptions)
    await app.route(staticRoute)
  }

  return app
}

export default buildApp
