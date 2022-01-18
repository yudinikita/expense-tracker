import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './modules/config/db.js'
import { ApolloServer } from 'apollo-server-express'
import apolloConfig from './modules/config/apollo.js'
import app from './app.js'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config({ path: __dirname + '/modules/config/.env' })

process.title = 'expense-tracker'

const DEFAULT_PORT = 5000
const PORT = process.env.PORT || DEFAULT_PORT

const HOSTNAME = process.env.HOSTNAME
const CLIENT_URL = process.env.CLIENT_URL

const NODE_ENV = process.env.NODE_ENV

const PAD_START = 10

const startServer = async () => {
  await connectDB()

  const apolloServer = new ApolloServer(apolloConfig)
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.listen(PORT, HOSTNAME, async () => {
    console.log(colors.yellow('[ExpenseTracker] ') + 'AccessURLs:'.bold)
    console.log('--------------------------------------')
    console.log('Server: '.padStart(PAD_START) + 'http://' + HOSTNAME.magenta + ':' + PORT)
    console.log('Client: '.padStart(PAD_START) + CLIENT_URL.magenta)
    console.log('--------------------------------------')
    console.log('Mode: '.padStart(PAD_START) + NODE_ENV.magenta)
    console.log('Port: '.padStart(PAD_START) + PORT.magenta)
    console.log('--------------------------------------')
  })

  process.on('SIGINT', () => process.exit(0))
}

startServer()
