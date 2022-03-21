import React from 'react'
import s from '../../LineProgressBar.module.scss'

interface ProgressBarProgressProps {
  color?: string,
  progressOffset?: number
}

export const ProgressBarProgress: React.FC<ProgressBarProgressProps> = ({
  children,
  color = '',
  progressOffset = 0
}) => {

  return (
    <div
      className={s.progress}
      style={{
        backgroundColor: color,
        width: progressOffset
      }}
    >
      {children}
    </div>
  )
}
