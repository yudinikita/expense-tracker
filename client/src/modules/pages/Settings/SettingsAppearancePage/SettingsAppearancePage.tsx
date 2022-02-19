import React from 'react'
import { InnerNavigate, SettingsAppearance } from '../../../components'
import { useTranslation } from 'react-i18next'

export const SettingsAppearancePage: React.FC = () => {
  const { t } = useTranslation()
  
  return (
    <>
      <InnerNavigate title={t('settings.theme.title')} />
      <SettingsAppearance />
    </>
  )
}
