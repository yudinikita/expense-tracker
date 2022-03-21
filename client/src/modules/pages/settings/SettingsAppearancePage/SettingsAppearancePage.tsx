import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { Space, Typography } from 'modules/ui'
import { AppearanceList, NavigationBar } from 'modules/components'

export const SettingsAppearancePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('settings.theme.title')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <Space direction='vertical' size={25}>
        <Typography variant='h3'>{t('settings.theme.subtitle')}</Typography>

        <AppearanceList />
      </Space>
    </>
  )
}
