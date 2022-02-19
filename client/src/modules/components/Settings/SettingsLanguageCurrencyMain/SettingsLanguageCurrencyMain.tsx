import React from 'react'
import { InnerNavigate } from '../..'
import { SettingsCurrency, SettingsLanguage } from './components'
import { useTranslation } from 'react-i18next'

export const SettingsLanguageCurrencyMain = () => {
  const { t } = useTranslation()

  const titlePage = `${t('settings.language.title')} ${t('other.and.title')} ${t('settings.currency.title')}`

  return (
    <>
      <InnerNavigate title={titlePage} />
      <SettingsLanguage />
      <br /> <br />
      <SettingsCurrency />
    </>
  )
}
