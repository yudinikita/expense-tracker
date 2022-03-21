import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify'
import fastifyCompress from 'fastify-compress'
import fastifyStatic from 'fastify-static'
import fastifyCors from 'fastify-cors'
import fastifyHelmet from 'fastify-helmet'
import i18next from 'i18next'
import i18nextMiddleware from 'i18next-http-middleware'
import { i18nOptions } from './config/i18n/options.js'
import { corsOptions } from './config/cors/index.js'
import { devRoute } from './config/fastify/index.js'
import { staticOptions, staticRoute } from './config/static/static.js'

const buildApp = async (fastifyOptions: FastifyServerOptions): Promise<FastifyInstance> => {
  const app: FastifyInstance = fastify(fastifyOptions)

  await app.register(fastifyCompress)
  await app.register(fastifyCors, corsOptions)
  await app.register(fastifyHelmet)

  await i18next.use(i18nextMiddleware.LanguageDetector).init(i18nOptions)

  await app.register(i18nextMiddleware.plugin, { i18next })

  if (process.env['NODE_ENV'] === 'production') {
    await app.register(fastifyStatic, staticOptions)
    await app.route(staticRoute)
  } else {
    await app.route(devRoute)
  }

  return app
}

export default buildApp
