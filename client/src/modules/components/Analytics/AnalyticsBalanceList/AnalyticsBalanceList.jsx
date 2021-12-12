import React from 'react'
import PropTypes from 'prop-types'
import { AnalyticsItem, TransactionsNotFound } from '../..'
import { AnalyticsTotal } from './components'

const propTypes = {
  analyticsItems: PropTypes.array,
  total: PropTypes.number,
}

export const AnalyticsBalanceList = ({ analyticsItems, total }) => {
  if (analyticsItems?.length === 0) return <TransactionsNotFound />

  const renderTotal = () => total ? <li><AnalyticsTotal analyticsItems={analyticsItems} total={total} /></li> : null

  return (
    <ul className='list-reset'>
      {analyticsItems.map(analyticsItem => (
        <li key={analyticsItem.id} style={{ marginBottom: '25px' }}>
          <AnalyticsItem
            title={analyticsItem.title}
            amount={analyticsItem.amount}
            percent={analyticsItem.percent}
            color={analyticsItem.color}
          />
        </li>
      ))}
      {renderTotal()}
    </ul>
  )
}

AnalyticsBalanceList.propTypes = propTypes
