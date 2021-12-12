const express = require('express')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/cors')
const morgan = require('morgan')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use(compression())
app.use(express.json({ extended: true }))
app.use(cookieParser())

app.use(cors(corsOptions))

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'production') {
  //app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.use('/', serveStatic(path.join(__dirname, 'client', 'build'), { index: 'index.html' }))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

module.exports = app
