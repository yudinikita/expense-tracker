import React from 'react'
import { AnalyticsItem, TransactionsNotFound } from '../..'
import { AnalyticsItemType, AnalyticsTotal } from './components'

interface Props {
  analyticsItems: AnalyticsItemType[]
  total?: number
}

export const AnalyticsBalanceList: React.FC<Props> = ({ analyticsItems, total }) => {
  if (analyticsItems?.length === 0) return <TransactionsNotFound />

  const renderTotal = () => total
    ? <li><AnalyticsTotal analyticsItems={analyticsItems} total={Math.abs(total)} /></li>
    : null

  return (
    <ul className='list-reset'>
      {analyticsItems.map(analyticsItem => (
        <li key={analyticsItem?.id} style={{ marginBottom: '25px' }}>
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
