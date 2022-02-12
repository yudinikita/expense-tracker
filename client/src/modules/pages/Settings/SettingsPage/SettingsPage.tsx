import React from 'react'
import { PageTitle, SettingsMain } from '../../../components'

import settings from '../../../assets/animation/settings.json'

export const SettingsPage = () => {
  return (
    <>
      <PageTitle title='Настройки' icon={settings} />
      <SettingsMain />
    </>
  )
}
