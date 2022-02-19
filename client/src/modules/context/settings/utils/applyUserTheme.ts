import { defaultSettings } from '../defaultSettings'

export const applyUserTheme = (theme: string | undefined): void => {
  const userTheme = theme ?? defaultSettings.theme
  document.documentElement.setAttribute('data-theme', userTheme)
}
