import { ApolloServer } from 'apollo-server-fastify'
import buildApp from './app.js'
import connectDB from './modules/config/db.js'
import apolloConfig from './modules/config/apollo.js'
import printStartServer from './modules/config/printStartServer.js'
import constants from './modules/constants/constants.js'
import { FastifyInstance } from 'fastify'

const startServer = async (): Promise<FastifyInstance> => {
  const PORT = process.env['PORT'] ?? constants.SERVER.DEFAULT_PORT
  const HOSTNAME = process.env['HOSTNAME'] ?? constants.SERVER.DEFAULT_HOST

  const app = await buildApp()

  try {
    await connectDB(app)

    const apolloServer = new ApolloServer(apolloConfig)
    await apolloServer.start()
    await app.register(apolloServer.createHandler({ cors: false }))

    await app.listen(PORT, HOSTNAME)

    await printStartServer(PORT, HOSTNAME)
  } catch (error) {
    app.log.error(error)
    process.exit(0)
  }

  return app
}

export default startServer
