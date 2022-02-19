import React from 'react'
import { PageTitle, SettingsMain } from '../../../components'
import { useTranslation } from 'react-i18next'

import settings from '../../../assets/animation/settings.json'

export const SettingsPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle title={t('settings.title')} icon={settings} />
      <SettingsMain />
    </>
  )
}
