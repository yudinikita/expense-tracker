import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { Space } from 'modules/ui'
import { HelpForm, HelpList, NavigationBar } from 'modules/components'

export const HelpPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('help.title')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <Space
        direction='vertical'
        size={50}
        blockItem
      >
        <HelpForm />
        <HelpList />
      </Space>
    </>
  )
}
