import React from 'react'
import { AnalyticsMain, PageTitle } from '../../components'

import analytic from '../../assets/animation/analytic.json'
import { useTranslation } from 'react-i18next'

export const AnalyticsPage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <PageTitle title={t('analytics.title')} icon={analytic} />
      <AnalyticsMain />
    </>
  )
}
