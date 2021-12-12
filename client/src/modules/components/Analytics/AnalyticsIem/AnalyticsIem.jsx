import React from 'react'
import PropTypes from 'prop-types'
import { LineProgressBar, Price } from '../../index'
import styles from './AnalyticsItem.module.scss'

export const AnalyticsItem = ({
  title,
  amount,
  percent,
  color
}) => {
  return (
    <>
      <div className={styles.info}>
        <p>{title}</p>
        <Price amount={amount} haveColor={false} />
      </div>
      <LineProgressBar percent={percent} color={color} />
    </>
  )
}

AnalyticsItem.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  percent: PropTypes.number,
  color: PropTypes.string
}
