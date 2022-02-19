import React from 'react'
import { InnerNavigate, SettingsSecurityMain } from '../../../components'
import { useTranslation } from 'react-i18next'

export const SettingsSecurityPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <InnerNavigate title={t('settings.security.title')} />
      <SettingsSecurityMain />
    </>
  )
}
