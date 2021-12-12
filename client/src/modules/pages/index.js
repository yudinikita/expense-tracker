// Агрегация страниц

// Авторизация
export { StartPage, LoginPage, RegistrationPage, ActivatePage } from './AuthPages'

// Основные
export { HomePage } from './HomePage'
export { TransactionPage } from './Transactions'
export { AnalyticsPage } from './AnalyticsPage'
export { SettingsPage } from './Settings'
export { Logout } from './Logout'

// Настройки
export {
  SettingsEmailPage,
  SettingsSecurityPage,
  SettingsLanguageCurrencyPage
} from './Settings'

// Дополнительные
export {
  DetailTransactionPage,
  CreateTransactionPage,
  SearchTransactionsPage,
  EditTransactionPage
} from './Transactions'

export { CategoriesPage } from './CategoriesPage'

export { HelpPage, HelpDetailPage } from './HelpPages/'

// Ошибки
export { Page404 } from './Page404/Page404'
