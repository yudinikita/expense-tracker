import initConfig from './modules/config/config.js'
import startServer from './server.js'

process.title = 'expense-tracker'
process.on('SIGINT', () => process.exit(0))

initConfig()
  .then(result => {

    if (result.error) {
      throw result.error
    }

    startServer().then(() => {
      console.log('Happy Expenses!'.bgGreen)
      console.log(`
                      __   __              __
.-----.-----.-----.--|  | |  |.--.--.----.|  |--.
|  _  |  _  |  _  |  _  | |  ||  |  |  __||    <
|___  |_____|_____|_____| |__||_____|____||__|__|
|_____|
      `)
    })
  })
