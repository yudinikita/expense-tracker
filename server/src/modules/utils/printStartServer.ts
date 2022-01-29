import colors from 'ansi-colors'
import constants from '../constants/constants.js'

const printStartServer = (PORT: string | number, HOSTNAME: string): void => {
  const NODE_ENV = process.env['NODE_ENV'] ?? constants.DEFAULT_NODE_ENV
  const CLIENT_URL = process.env['CLIENT_URL'] ?? ''
  const SERVER_URL = `http://${HOSTNAME}:${PORT}`
  const PAD_START = 10

  console.log(colors.yellow('[ExpenseTracker] ') + colors.bold('AccessURLs:'))
  console.log('--------------------------------------')
  console.log('Server: '.padStart(PAD_START) + SERVER_URL)
  console.log('Client: '.padStart(PAD_START) + colors.magenta(CLIENT_URL))
  console.log('--------------------------------------')
  console.log('Mode: '.padStart(PAD_START) + colors.magenta(NODE_ENV))
  console.log('Port: '.padStart(PAD_START) + colors.magenta(String(PORT)))
  console.log('--------------------------------------')
}

export default printStartServer
