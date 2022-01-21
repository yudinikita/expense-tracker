import fastify from 'fastify'
import fastifyCompress from 'fastify-compress'
import fastifyStatic from 'fastify-static'
import fastifyCors from 'fastify-cors'
import fastifyHelmet from 'fastify-helmet'
import fastifyJwt from 'fastify-jwt'
import corsOptions from './modules/config/cors.js'
import fastifyOptions from './modules/config/fastifyOptions.js'
import jwtOptions from './modules/config/jwt.js'
import staticOptions, { staticRoute } from './modules/config/static.js'

const buildApp = async () => {
  const app = fastify(fastifyOptions)

  app.register(fastifyCompress)
  app.register(fastifyCors, corsOptions)
  app.register(fastifyHelmet)
  app.register(fastifyJwt, jwtOptions)

  if (process.env.NODE_ENV === 'production') {
    app.register(fastifyStatic, staticOptions)
    app.route(staticRoute)
  }

  return app
}

export default buildApp
