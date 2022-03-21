import Dinero from 'dinero.js'
import { Settings } from 'modules/graphql'
import { applyUserTheme } from './applyUserTheme'
import { changeLanguage } from 'modules/utils'

export const applyUserSettings = (settings: Settings) => {
  applyUserTheme(settings.theme)
  changeLanguage(settings.language)
  Dinero.defaultCurrency = settings.currency as Dinero.Currency
}
