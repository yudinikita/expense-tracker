import { createApplication } from 'graphql-modules'
import CategoryModule from './modules/category/index.js'
import UserModule from './modules/user/index.js'
import UserSettingsModule from './modules/userSettings/index.js'
import TransactionModule from './modules/transaction/index.js'
import HelpModule from './modules/help/index.js'
import AnalyticModule from './modules/analytic/index.js'

const application = createApplication({
  modules: [
    UserModule,
    UserSettingsModule,
    CategoryModule,
    TransactionModule,
    AnalyticModule,
    HelpModule
  ]
})

export default application
