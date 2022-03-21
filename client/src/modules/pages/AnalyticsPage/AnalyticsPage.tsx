import React from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { AnalyticsMain, NavigationBar } from 'modules/components'
import analytic from 'modules/assets/animation/analytic.json'

export const AnalyticsPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <NavigationBar
        title={t('analytics.title')}
        titleVariant='large'
        spaceBottom={NAVIGATION.GLOBAL.SPACE.BOTTOM}
        animationData={analytic}
      />

      <AnalyticsMain />
    </>
  )
}
