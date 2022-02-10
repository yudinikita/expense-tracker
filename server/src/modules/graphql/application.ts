import { createApplication } from 'graphql-modules'
import {
  AnalyticModule,
  CategoryModule,
  CommonModule,
  HelpModule,
  TransactionModule,
  UserModule,
  UserSettingsModule
} from './modules/index.js'

export const application = createApplication({
  modules: [
    AnalyticModule,
    CategoryModule,
    CommonModule,
    HelpModule,
    TransactionModule,
    UserModule,
    UserSettingsModule
  ]
})
