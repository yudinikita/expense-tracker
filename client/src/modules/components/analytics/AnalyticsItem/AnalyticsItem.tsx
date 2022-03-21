import React from 'react'
import { LineProgressBar, Price } from 'modules/ui'
import s from './AnalyticsItem.module.scss'

export interface AnalyticsItemProps {
  title?: string
  amount?: number
  percent?: number
  color?: string
}

export const AnalyticsItem: React.FC<AnalyticsItemProps> = ({
  title = '',
  amount = 0,
  percent = 0,
  color
}) => {
  return (
    <div>
      <div className={s.info}>
        <p>{title}</p>
        <Price amount={amount} />
      </div>
      <LineProgressBar
        percent={percent}
        color={color}
      />
    </div>
  )
}
