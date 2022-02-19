import i18next from 'i18next'
import { defaultSettings } from '../defaultSettings'
import dayjs from 'dayjs'

export const applyUserLanguage = async (language: string | undefined): Promise<void> => {
  const userLanguage = language ?? defaultSettings?.language
  await i18next.changeLanguage(userLanguage)
  dayjs.locale(userLanguage)
}
