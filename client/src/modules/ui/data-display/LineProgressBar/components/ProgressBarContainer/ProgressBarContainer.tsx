import React from 'react'
import s from '../../LineProgressBar.module.scss'

interface ProgressBarContainerProps {
  containerRef: React.RefObject<HTMLDivElement>
  height?: number
  width?: number
}

export const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({
  containerRef,
  height,
  width,
  children
}) => {

  return (
    <div
      className={s.container}
      ref={containerRef}
      style={{ height, width }}
    >
      <div
        className={s.inner}
        style={{ height, width }}
      >
        {children}
      </div>
    </div>
  )
}
