import React from 'react'
import PropTypes from 'prop-types'
import styles from '../LineProgressBar.module.scss'

export const ProgressBarContainer = ({ containerRef, height, children }) => (
  <div
    ref={containerRef}
    className={styles.container}
    style={{ height }}
  >
    <div
      className={styles.inner}
      style={{ height }}
    >
      {children}
    </div>
  </div>
)

ProgressBarContainer.propTypes = {
  containerRef: PropTypes.object,
  height: PropTypes.number,
  children: PropTypes.node
}
