import React, { ElementType } from 'react'
import { Button, Icon, Space } from 'modules/ui'
import {
  BelarusFlag,
  RussiaFlag,
  SouthKoreaFlag,
  SpainFlag,
  UkraineFlag,
  UnitedKingdomFlag
} from 'modules/assets/icons'
import { useSettings } from 'modules/hooks'
import { defaultSettings } from 'modules/context/settings/defaultSettings'

/**
 * List of languages are continuous, vertical indexes of language
 */
export const LanguagesList: React.FC = () => {
  const { settings, saveSettings } = useSettings()

  const handleChangeLanguage = (languageCode: string) => {
    if (languageCode) saveSettings({ ...settings, language: languageCode })
  }

  const currentLanguage = settings?.language ?? defaultSettings.language

  return (
    <Space direction='vertical'>
      {renderLanguageItem('Русский', RussiaFlag, 'ru', currentLanguage, handleChangeLanguage)}
      {renderLanguageItem('English', UnitedKingdomFlag, 'en', currentLanguage, handleChangeLanguage)}
      {renderLanguageItem('Беларуская', BelarusFlag, 'be', currentLanguage, handleChangeLanguage)}
      {renderLanguageItem('한국어', SouthKoreaFlag, 'ko', currentLanguage, handleChangeLanguage)}
      {renderLanguageItem('Español', SpainFlag, 'es', currentLanguage, handleChangeLanguage)}
      {renderLanguageItem('Українська', UkraineFlag, 'uk', currentLanguage, handleChangeLanguage)}
    </Space>
  )
}

const renderLanguageItem = (
  title: string,
  icon: string | ElementType,
  languageCode: string,
  currentLanguage: string,
  handleChangeLanguage: (languageCode: string) => void
) => {
  const iconCountry = <Icon icon={icon} iconSize={40} style={{ borderRadius: '50%' }} />

  const isActive = currentLanguage === languageCode
  const buttonVariant = isActive ? 'primary' : 'default'

  return (
    <Button
      variant={buttonVariant}
      size='small'
      textAlign='left'
      before={iconCountry}
      onClick={() => handleChangeLanguage(languageCode)}
    >
      {title}
    </Button>
  )
}
