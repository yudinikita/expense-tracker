import dotenv from 'dotenv'
import colors from 'colors'
import { ApolloServer } from 'apollo-server-fastify'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import buildApp from './app.js'
import connectDB from './modules/config/db.js'
import apolloConfig from './modules/config/apollo.js'

const __dirname = dirname(fileURLToPath(import.meta.url))

dotenv.config({ path: __dirname + '/modules/config/.env' })

process.title = 'expense-tracker'
process.on('SIGINT', () => process.exit(0))

const DEFAULT_PORT = 5000
const PORT = process.env.PORT || DEFAULT_PORT

const HOSTNAME = process.env.HOSTNAME
const CLIENT_URL = process.env.CLIENT_URL

const NODE_ENV = process.env.NODE_ENV

const PAD_START = 10

const app = await buildApp()

const startServer = async () => {
  try {
    await connectDB(app)

    const apolloServer = new ApolloServer(apolloConfig)
    await apolloServer.start()
    app.register(apolloServer.createHandler({ cors: false }))

    await app.listen(PORT, HOSTNAME, () => {
      console.log(colors.yellow('[ExpenseTracker] ') + colors.bold('AccessURLs:'))
      console.log('--------------------------------------')
      console.log('Server: '.padStart(PAD_START) + 'http://' + colors.magenta(HOSTNAME) + ':' + PORT)
      console.log('Client: '.padStart(PAD_START) + colors.magenta(CLIENT_URL))
      console.log('--------------------------------------')
      console.log('Mode: '.padStart(PAD_START) + colors.magenta(NODE_ENV))
      console.log('Port: '.padStart(PAD_START) + colors.magenta(PORT))
      console.log('--------------------------------------')
    })
  } catch (error) {
    app.log.error(error)
    process.exit(1)
  }
}

startServer()
