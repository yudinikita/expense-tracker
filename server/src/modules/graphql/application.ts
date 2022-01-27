import { createApplication } from 'graphql-modules'
import {
  AnalyticModule,
  CategoryModule,
  HelpModule,
  TransactionModule,
  UserModule,
  UserSettingsModule
} from './modules/index.js'

export const application = createApplication({
  modules: [
    UserModule,
    UserSettingsModule,
    CategoryModule,
    TransactionModule,
    AnalyticModule,
    HelpModule
  ]
})
