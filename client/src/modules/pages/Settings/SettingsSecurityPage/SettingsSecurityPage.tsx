import React from 'react'
import { InnerNavigate, SettingsSecurityMain } from '../../../components'

export const SettingsSecurityPage: React.FC = () => {
  return (
    <>
      <InnerNavigate title='Безопасность' />
      <SettingsSecurityMain />
    </>
  )
}
