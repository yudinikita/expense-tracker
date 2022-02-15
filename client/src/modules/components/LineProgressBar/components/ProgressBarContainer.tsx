import React, { RefObject } from 'react'
import styles from '../LineProgressBar.module.scss'

interface Props {
  containerRef: RefObject<HTMLDivElement>
  height?: number
}

export const ProgressBarContainer: React.FC<Props> = ({
  containerRef,
  height,
  children
}) => (
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
