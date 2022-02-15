import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { LineProgressBar, Price } from '../../index'
import styles from './AnalyticsItem.module.scss'

const propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number.isRequired,
  percent: PropTypes.number,
  color: PropTypes.string
}

export const AnalyticsItem = ({
  title,
  amount,
  percent,
  color
}: InferProps<typeof propTypes>) => {
  return (
    <>
      <div className={styles.info}>
        <p>{title}</p>
        <Price amount={amount} haveColor={false} />
      </div>
      <LineProgressBar percent={percent ?? undefined} color={color ?? ''} />
    </>
  )
}

AnalyticsItem.propTypes = propTypes
