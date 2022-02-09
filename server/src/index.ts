import colors from 'ansi-colors'
import { initConfig } from './modules/config/server/index.js'
import startServer from './modules/server.js'

process.title = 'expense-tracker'
process.on('SIGINT', () => process.exit(0))

initConfig()
  .then(result => {
    if (result.error != null) {
      console.log(colors.magenta('[ENV] ') + colors.red('error'))
      throw result.error
    }

    startServer()
      .then(() => console.log(colors.bold.green('Happy Expenses! ️❤ ')))
      .catch((e) => console.log('Error server starting!', e))
  })
  .catch(() => console.log('Error init config!'))
