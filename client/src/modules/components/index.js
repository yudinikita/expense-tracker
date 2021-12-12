// Агрегация компонентов

// Авторизация и регистрация
export { StartMain, LoginForm, RegistrationForm, ActivationForm } from './Auth'

// Общие
export { MainNavigation } from './MainNavigation'
export { MainHeader } from './MainHeader'

// Операции
export {
  Transactions,
  TransactionsDetail,
  TransactionsForm,
  TransactionsNotFound,
  TransactionsSearch
} from './Transactions'

// Баланс
export { Balance } from './Balance'

// Аналитика
export { AnalyticsMain } from './Analytics/AnalyticsMain'
export { AnalyticsBalance } from './Analytics/AnalyticsBalance'
export { AnalyticsExpense } from './Analytics/AnalyticsExpense'
export { AnalyticsIncome } from './Analytics/AnalyticsIncome'
export { AnalyticsItem } from './Analytics/AnalyticsIem'

// Настройки
export { SettingsMain } from './Settings/SettingsMain'
export { SettingsNavigate } from './Settings/SettingsNavigate'
export { SettingsEmailMain } from './Settings/SettingsEmailMain'
export { SettingsSecurityMain } from './Settings/SettingsSecurityMain'
export { SettingsLanguageCurrencyMain } from './Settings/SettingsLanguageCurrencyMain'

// Категории
export { Categories } from './Categories'

// Разное
export { Logo } from './Logo'
export { Price, SIGN_DISPLAY } from './Price'
export { HomePhrase } from './HomePhrase'
export { LineProgressBar } from './LineProgressBar'
export { InnerNavigate } from './InnerNavigate'
export { PageTitle } from './PageTitle'
export { ModalSignOut } from './Settings/ModalSignOut'
export { HelpMain, HelpDetail } from './HelpMain'
export { MyError } from './MyError'
export { MyLoader } from './MyLoader'
export { MyModal } from './MyModal'
export { DateSwitcher } from './DateSwitcher'
export { HomeAnalytics } from './HomeAnalytics'
