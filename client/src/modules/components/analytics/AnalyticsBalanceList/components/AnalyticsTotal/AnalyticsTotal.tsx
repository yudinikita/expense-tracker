import React from 'react'
import { LineProgressBar, Price } from 'modules/ui'
import { AnalyticsItemProps } from 'modules/components'
import { useTranslation } from 'react-i18next'
import styles from './AnalyticsTotal.module.scss'

interface AnalyticsTotalProps {
  analyticsItems: AnalyticsItemProps[]
  total?: number
}

export const AnalyticsTotal: React.FC<AnalyticsTotalProps> = ({ analyticsItems, total }) => {
  const { t } = useTranslation()

  return (
    <div>
      <div className={styles.info}>
        <p>{t('analytics.total')}</p>
        <Price amount={total ?? 0} haveColor={false} />
      </div>
      <LineProgressBar array={analyticsItems} />
    </div>
  )
}
