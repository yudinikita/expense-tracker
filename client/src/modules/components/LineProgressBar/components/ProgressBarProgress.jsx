import React from 'react'
import PropTypes from 'prop-types'
import styles from '../LineProgressBar.module.scss'

export const ProgressBarProgress = ({ children, color, progressOffset }) => (
  <div
    className={styles.progress}
    style={{
      backgroundColor: color,
      width: progressOffset
    }}
  >
    {children}
  </div>
)

ProgressBarProgress.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  progressOffset: PropTypes.number,
}
