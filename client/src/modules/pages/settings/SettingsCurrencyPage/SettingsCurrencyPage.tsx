import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { CurrenciesList, NavigationBar } from 'modules/components'

export const SettingsCurrencyPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('settings.currency.title')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <CurrenciesList />
    </>
  )
}
