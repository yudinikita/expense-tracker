import React from 'react'
import PropTypes from 'prop-types'
import styles from '../LineProgressBar.module.scss'

export const ProgressBarPercent = ({ percent }) => (
  <span className={styles.percent}>
    {Math.floor(percent * 100) / 100}%
  </span>
)

ProgressBarPercent.propTypes = {
  percent: PropTypes.number
}
