import React from 'react'
import { v4 } from 'uuid'
import { AnalyticsItem, AnalyticsItemProps, TransactionsNotFound } from '../..'
import { AnalyticsTotal } from './components'

interface Props {
  analyticsItems?: AnalyticsItemProps[]
  total?: number
}

export const AnalyticsBalanceList: React.FC<Props> = ({
  analyticsItems = [],
  total
}) => {
  if (analyticsItems?.length === 0) return <TransactionsNotFound />

  const renderTotal = () =>
    total
      ? <li key={v4()}><AnalyticsTotal analyticsItems={analyticsItems} total={Math.abs(total)} /></li>
      : null

  return (
    <ul className='list-reset'>
      {analyticsItems.map(analyticsItem => (
        <li
          key={v4()}
          style={{ marginBottom: '25px' }}
        >
          <AnalyticsItem
            title={analyticsItem?.title}
            amount={analyticsItem?.amount}
            percent={analyticsItem?.percent}
            color={analyticsItem?.color}
          />
        </li>
      ))}
      {renderTotal()}
    </ul>
  )
}
