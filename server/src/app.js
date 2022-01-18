import fastify from 'fastify'
import fastifyCompress from 'fastify-compress'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import fastifyStatic from 'fastify-static'
import corsOptions from './modules/config/cors.js'
import fastifyCors from 'fastify-cors'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default async function buildApp () {
  const app = fastify({
    logger: true,
  })

  app.register(fastifyCompress)

  app.register(fastifyCors, corsOptions)

  if (process.env.NODE_ENV === 'production') {
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
