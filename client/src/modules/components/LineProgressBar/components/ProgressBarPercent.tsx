import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styles from '../LineProgressBar.module.scss'

const propTypes = {
  percent: PropTypes.number.isRequired
}

export const ProgressBarPercent = ({ percent }: InferProps<typeof propTypes>) => (
  <span className={styles.percent}>
    {Math.floor(percent * 100) / 100}%
  </span>
)

ProgressBarPercent.propTypes = propTypes
