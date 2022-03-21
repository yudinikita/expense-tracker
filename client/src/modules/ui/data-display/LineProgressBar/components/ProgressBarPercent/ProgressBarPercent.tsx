import React from 'react'
import s from '../../LineProgressBar.module.scss'

interface ProgressBarPercentProps {
  percent?: number
}

export const ProgressBarPercent: React.FC<ProgressBarPercentProps> = ({
  percent = 0
}) => {
  const formattedPercent = Math.floor(percent * 100) / 100

  return (
    <span className={s.percent}>
      {formattedPercent}%
    </span>
  )
}
