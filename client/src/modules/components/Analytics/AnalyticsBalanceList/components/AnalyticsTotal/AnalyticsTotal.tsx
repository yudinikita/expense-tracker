import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { LineProgressBar, Price } from '../../../..'
import styles from './AnalyticsTotal.module.scss'

const propTypes = {
  analyticsItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any,
    title: PropTypes.string,
    amount: PropTypes.number,
    percent: PropTypes.number,
    color: PropTypes.string
  })).isRequired,
  total: PropTypes.number,
}

export const AnalyticsTotal = ({ analyticsItems, total }: InferProps<typeof propTypes>) => {
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
