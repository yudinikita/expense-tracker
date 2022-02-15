import React from 'react'
import { LineProgressBar, Price } from '../../../..'
import styles from './AnalyticsTotal.module.scss'

export interface AnalyticsItemType {
  id: string | number
  title: string
  amount: number
  percent: number
  color: string
}

interface Props {
  analyticsItems: AnalyticsItemType[]
  total?: number
}

export const AnalyticsTotal: React.FC<Props> = ({ analyticsItems, total }) => {
  return (
    <div>
      <div className={styles.info}>
        <p>Всего</p>
        <Price amount={total ?? 0} haveColor={false} />
      </div>
      <LineProgressBar array={analyticsItems} />
    </div>
  )
}
