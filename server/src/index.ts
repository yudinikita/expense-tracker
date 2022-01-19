import colors from 'colors'
import { ApolloServer } from 'apollo-server-fastify'
import buildApp from './app.js'
import apolloConfig from './modules/config/apollo.js'
import connectDB from './modules/config/db.js'
import initConfig from './modules/config/config.js'

process.title = 'expense-tracker'
process.on('SIGINT', () => process.exit(0))

initConfig()

const NODE_ENV = process.env.NODE_ENV || ''

const DEFAULT_PORT = 5000
const PORT = process.env.PORT || DEFAULT_PORT

const HOSTNAME = process.env.HOSTNAME || ''
const CLIENT_URL = process.env.CLIENT_URL || ''

const PAD_START = 10

const startServer = async () => {
  const app = await buildApp()

  try {
    await connectDB(app)

    const apolloServer = new ApolloServer(apolloConfig)
    await apolloServer.start()
    app.register(apolloServer.createHandler({ cors: false }))

    await app.listen(PORT, HOSTNAME)

    console.log(colors.yellow('[ExpenseTracker] ') + colors.bold('AccessURLs:'))
    console.log('--------------------------------------')
    console.log('Server: '.padStart(PAD_START) + 'http://' + colors.magenta(HOSTNAME) + ':' + PORT)
    console.log('Client: '.padStart(PAD_START) + colors.magenta(CLIENT_URL))
    console.log('--------------------------------------')
    console.log('Mode: '.padStart(PAD_START) + colors.magenta(NODE_ENV))
    console.log('Port: '.padStart(PAD_START) + colors.magenta(PORT.toString()))
    console.log('--------------------------------------')
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

startServer()
