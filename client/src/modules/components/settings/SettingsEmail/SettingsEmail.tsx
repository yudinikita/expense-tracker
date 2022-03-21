import React from 'react'
import { useTranslation } from 'react-i18next'
import { Space, Typography } from 'modules/ui'
import { useAuthUser } from 'react-auth-kit'

export const SettingsEmail = () => {
  const { t } = useTranslation()
  const auth = useAuthUser()

  const email = auth()?.['email'] ?? ''

  return (
    <Space direction='vertical'>
      <Typography variant='h3'>
        {t('settings.email.now.title')}
      </Typography>

      <Typography variant='text'>
        {t('settings.email.now.desc')} <b>{email}</b>
      </Typography>
    </Space>
  )
}
