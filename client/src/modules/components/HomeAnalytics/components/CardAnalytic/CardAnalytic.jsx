import React from 'react'
import PropTypes from 'prop-types'
import { Price } from '../../..'
import { CardAnalyticPercent } from './components'
import styles from './CardAnalytic.module.scss'

const defaultProps = {
  title: '',
  desc: '',
  amount: 0,
  percent: 0,
}

const propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  amount: PropTypes.number,
  percent: PropTypes.number,
  color: PropTypes.string,
  colorPercent: PropTypes.string,
}

export const CardAnalytic = ({
  title,
  desc,
  amount,
  percent,
  color,
  colorPercent
}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: color }}
    >
      <div className={styles.inner}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
          <Price
            className={styles.amount}
            amount={amount}
          />
        </div>
        <CardAnalyticPercent
          percent={percent}
          colorPercent={colorPercent}
        />
      </div>
    </div>
  )
}

CardAnalytic.propTypes = propTypes
CardAnalytic.defaultProps = defaultProps
