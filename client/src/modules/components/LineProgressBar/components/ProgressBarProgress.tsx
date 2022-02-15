import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styles from '../LineProgressBar.module.scss'

const propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  progressOffset: PropTypes.number
}

export const ProgressBarProgress: React.FC<InferProps<typeof propTypes>> = ({
  children,
  color,
  progressOffset
}) => (
  <div
    className={styles.progress}
    style={{
      backgroundColor: color ?? '',
      width: progressOffset ?? 0
    }}
  >
    {children}
  </div>
)

ProgressBarProgress.propTypes = propTypes
