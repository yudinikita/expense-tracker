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
      .then((app) => {
        app.log.info(colors.bold.green('Happy Expenses! ️❤ '))
        app.log.info(colors.white(`
                      __   __              __
.-----.-----.-----.--|  | |  |.--.--.----.|  |--.
|  _  |  _  |  _  |  _  | |  ||  |  |  __||    <
|___  |_____|_____|_____| |__||_____|____||__|__|
|_____|
      `))
      })
      .catch(() => console.log('Error server starting!'))
  })
  .catch(() => console.log('Error init config!'))
