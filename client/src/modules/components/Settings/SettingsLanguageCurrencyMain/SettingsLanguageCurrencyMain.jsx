import React from 'react'
import { InnerNavigate } from '../..'
import { SettingsCurrency, SettingsLanguage } from './components'

export const SettingsLanguageCurrencyMain = () => {
  return (
    <>
      <InnerNavigate title='Язык и валюта' />
      <SettingsLanguage />
      <br /> <br />
      <SettingsCurrency />
    </>
  )
}
