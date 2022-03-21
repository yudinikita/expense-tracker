import React from 'react'
import { useLineProgressBar } from './hooks'
import { ProgressBarContainer, ProgressBarPercent, ProgressBarProgress, ProgressBarTotal } from './components'

interface LineProgressBarProps {
  percent?: number
  height?: number
  width?: number
  color?: string
  array?: any[]
}

/**
 * The Line Progress Bar
 */
export const LineProgressBar: React.FC<LineProgressBarProps> = ({
  percent = 0,
  height,
  width,
  color,
  array
}) => {
  const { containerRef, progressOffset } = useLineProgressBar(percent, width)

  if (array) {
    return (
      <ProgressBarTotal
        array={array}
        containerRef={containerRef}
        height={height}
        width={width}
      />
    )
  }

  return (
    <ProgressBarContainer
      containerRef={containerRef}
      height={height}
      width={width}
    >
      <ProgressBarProgress
        progressOffset={progressOffset}
        color={color}
      >
        <ProgressBarPercent percent={percent} />
      </ProgressBarProgress>
    </ProgressBarContainer>
  )
}
