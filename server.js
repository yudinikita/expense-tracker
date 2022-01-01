const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./server/config/db')
const { ApolloServer } = require('apollo-server-express')
const apolloConfig = require('./server/config/apollo')
const app = require('./server/app')

dotenv.config({ path: `${__dirname}/server/config/config.env` })

process.title = 'expense-tracker'

const DEFAULT_PORT = 5000
const PORT = process.env.PORT || DEFAULT_PORT

const startServer = async () => {
  await connectDB()

  const apolloServer = new ApolloServer(apolloConfig)
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.listen(PORT, () => {
    const PAD_START = 10
    console.log('[' + 'ExpenseTracker'.yellow + '] ' + 'AccessURLs:'.bold)
    console.log('--------------------------------------')
    console.log('Server: '.padStart(PAD_START) + process.env.SERVER_URL.magenta + ':' + PORT)
    console.log('Client: '.padStart(PAD_START) + process.env.CLIENT_URL.magenta)
    console.log('--------------------------------------')
    console.log('Mode: '.padStart(PAD_START) + process.env.NODE_ENV.magenta)
    console.log('Port: '.padStart(PAD_START) + PORT.magenta)
    console.log('--------------------------------------')
  })

  process.on('SIGINT', () => process.exit(0))
}

startServer()
