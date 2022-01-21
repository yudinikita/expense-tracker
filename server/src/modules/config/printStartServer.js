import colors from 'ansi-colors'
import constants from '../constants/constants.js'

const printStartServer = async (PORT, HOSTNAME) => {
  const NODE_ENV = process.env.NODE_ENV || constants.DEFAULT_NODE_ENV
  const CLIENT_URL = process.env.CLIENT_URL || ''
  const PAD_START = 10
  const TYPE_SERVER = 'http://'

  console.log(colors.yellow('[ExpenseTracker] ') + colors.bold('AccessURLs:'))
  console.log('--------------------------------------')
  console.log('Server: '.padStart(PAD_START) + TYPE_SERVER + colors.magenta(HOSTNAME) + ':' + PORT)
  console.log('Client: '.padStart(PAD_START) + colors.magenta(CLIENT_URL))
  console.log('--------------------------------------')
  console.log('Mode: '.padStart(PAD_START) + colors.magenta(NODE_ENV))
  console.log('Port: '.padStart(PAD_START) + colors.magenta(PORT.toString()))
  console.log('--------------------------------------')
}

export default printStartServer
