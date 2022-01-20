import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import fastify from 'fastify'
import fastifyCompress from 'fastify-compress'
import fastifyStatic from 'fastify-static'
import fastifyCors from 'fastify-cors'
import fastifyHelmet from 'fastify-helmet'
import corsOptions from './modules/config/cors.js'
import fastifyOptions from './modules/config/fastifyOptions.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

const buildApp = async () => {
  const app = fastify(fastifyOptions)

  app.register(fastifyCompress)

  app.register(fastifyCors, corsOptions)

  app.register(fastifyHelmet)

  if (process.env['NODE_ENV'] === 'production') {
    const pathStatic = path.join(__dirname, 'client', 'build')
    const index = 'index.html'

    app.register(fastifyStatic, {
      root: path.join(pathStatic, index),
      prefix: '/'
    })

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', index))
    })
  }

  return app
}

export default buildApp
