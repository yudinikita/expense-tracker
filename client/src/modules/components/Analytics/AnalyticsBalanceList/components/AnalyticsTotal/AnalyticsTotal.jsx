import React from 'react'
import PropTypes from 'prop-types'
import { LineProgressBar, Price } from '../../../..'
import styles from './AnalyticsTotal.module.scss'

const propTypes = {
  analyticsItems: PropTypes.array,
  total: PropTypes.number,
}

export const AnalyticsTotal = ({ analyticsItems, total }) => {
  return (
    <div>
      <div className={styles.info}>
        <p>Всего</p>
        <Price amount={total} haveColor={false} />
      </div>
      <LineProgressBar array={analyticsItems} />
    </div>
  )
}

AnalyticsTotal.propTypes = propTypes
