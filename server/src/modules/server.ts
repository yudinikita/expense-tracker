import { FastifyInstance } from 'fastify'
import { ApolloServer } from 'apollo-server-fastify'
import constants from './constants/constants.js'
import buildApp from './app.js'
import { connectDB } from './config/database/db.js'
import { apolloConfig } from './config/apollo/apollo.js'
import printStartServer from './utils/printStartServer.js'

const startServer = async (): Promise<FastifyInstance> => {
  const PORT = process.env['PORT'] ?? constants.SERVER.DEFAULT_PORT
  const HOSTNAME = process.env['HOSTNAME'] ?? constants.SERVER.DEFAULT_HOST

  const app = await buildApp()

  try {
    await connectDB(app)

    const apolloServer = new ApolloServer(apolloConfig)
    await apolloServer.start()
    const apolloHandler = await apolloServer.createHandler({ cors: false })
    await app.register(apolloHandler)

    await app.listen(PORT, HOSTNAME)

    await printStartServer(PORT, HOSTNAME)
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }

  return app
}

export default startServer
