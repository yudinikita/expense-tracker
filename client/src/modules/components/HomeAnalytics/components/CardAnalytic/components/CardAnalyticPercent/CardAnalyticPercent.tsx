import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styles from './CardAnalyticPercent.module.scss'

const propTypes = {
  percent: PropTypes.number,
  colorPercent: PropTypes.string.isRequired
}

const defaultProps = {
  percent: 0
}

export const CardAnalyticPercent = ({ percent, colorPercent }: InferProps<typeof propTypes>) => {
  return (
    <div className={styles.percentGroup}>
      <svg viewBox='0 0 36 36' className={styles.circularChart}>
        <path
          className={styles.circleBg}
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <path
          className={styles.circle}
          strokeDasharray={`${percent}, 100`}
          style={{ stroke: colorPercent }}
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <text x='10' y='21' className={styles.percent}>{percent}%</text>
      </svg>
    </div>
  )
}

CardAnalyticPercent.propTypes = propTypes
CardAnalyticPercent.defaultProps = defaultProps
