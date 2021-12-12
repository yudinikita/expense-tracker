const { createApplication } = require('graphql-modules')
const CategoryModule = require('./category')
const UserModule = require('./user')
const UserSettingsModule = require('./userSettings')
const TransactionModule = require('./transaction')
const HelpModule = require('./help')
const AnalyticModule = require('./analytic')

const application = createApplication({
  modules: [
    UserModule,
    UserSettingsModule,
    CategoryModule,
    TransactionModule,
    AnalyticModule,
    HelpModule,
  ],
})

module.exports = application
