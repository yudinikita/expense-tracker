import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { LanguagesList, NavigationBar } from 'modules/components'

export const SettingsLanguagePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('settings.language.title')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <LanguagesList />
    </>
  )
}
