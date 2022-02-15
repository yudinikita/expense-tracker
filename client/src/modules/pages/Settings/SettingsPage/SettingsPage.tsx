import React from 'react'
import { PageTitle, SettingsMain } from '../../../components'

import settings from '../../../assets/animation/settings.json'

export const SettingsPage: React.FC = () => {
  return (
    <>
      <PageTitle title='Настройки' icon={settings} />
      <SettingsMain />
    </>
  )
}
