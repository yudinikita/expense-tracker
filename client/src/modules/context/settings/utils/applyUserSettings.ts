import { Settings } from '../../../graphql/__generated__/graphql.gen'
import { applyUserTheme } from './applyUserTheme'
import { applyUserLanguage } from './applyUserLanguage'

export const applyUserSettings = (settings: Settings) => {
  applyUserTheme(settings?.theme)
  applyUserLanguage(settings?.language)
}
