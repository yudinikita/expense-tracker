const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const { ApolloServer } = require('apollo-server-express')
const apolloConfig = require('./config/apollo')
const app = require('./app')

const dotenvParse = dotenv.config({ path: `${__dirname}/config/config.env` })
if (dotenvParse.error) throw dotenvParse?.error

const DEFAULT_PORT = 5000
const PORT = process.env.PORT || DEFAULT_PORT

const startServer = async () => {
  await connectDB()

  const apolloServer = new ApolloServer(apolloConfig)
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })

  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.magenta.bold)
    console.log(`Server ready at http://localhost:${PORT}`.yellow.bold)
  })
}

startServer()
