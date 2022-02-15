import React from 'react'
import { useLineProgressBar } from './hooks/useLineProgressBar'
import { ProgressBarContainer, ProgressBarPercent, ProgressBarProgress, ProgressBarTotal } from './components'
import { AnalyticsItemType } from '../Analytics/AnalyticsBalanceList/components'

interface Props {
  percent?: number
  height?: number
  width?: number
  array?: AnalyticsItemType[]
  color?: string
}

export const LineProgressBar: React.FC<Props> = ({
  percent = 0,
  height,
  width,
  color,
  array
}) => {
  const { containerRef, progressOffset } = useLineProgressBar(percent, width)

  if (array != null) {
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
    <ProgressBarContainer containerRef={containerRef} height={height}>
      <ProgressBarProgress color={color} progressOffset={progressOffset}>
        <ProgressBarPercent percent={percent} />
      </ProgressBarProgress>
    </ProgressBarContainer>
  )
}
