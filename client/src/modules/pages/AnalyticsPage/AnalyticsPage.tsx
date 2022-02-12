import React from 'react'
import { AnalyticsMain, PageTitle } from '../../components'

import analytic from '../../assets/animation/analytic.json'

export const AnalyticsPage = () => {
  return (
    <>
      <PageTitle title='Аналитика' icon={analytic} />
      <AnalyticsMain />
    </>
  )
}
