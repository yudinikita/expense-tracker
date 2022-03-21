import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { HelpDetail, NavigationBar } from 'modules/components'

export const HelpDetailPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('help.question')}
        backButton
        spaceBottom={NAVIGATION.INNER.SPACE.BOTTOM}
      />

      <HelpDetail />
    </>
  )
}
