import React from 'react'
import PropTypes from 'prop-types'
import { useLineProgressBar } from './hooks/useLineProgressBar'
import { ProgressBarContainer, ProgressBarPercent, ProgressBarProgress, ProgressBarTotal } from './components'

const propTypes = {
  percent: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  array: PropTypes.array,
}

export const LineProgressBar = ({
  percent = 0,
  height,
  width,
  color,
  array
}) => {
  const { containerRef, progressOffset } = useLineProgressBar(width, percent)

  if (array) return (
    <ProgressBarTotal
      array={array}
      containerRef={containerRef}
      height={height}
      width={width}
    />
  )

  return (
    <ProgressBarContainer containerRef={containerRef} height={height}>
      <ProgressBarProgress color={color} progressOffset={progressOffset}>
        <ProgressBarPercent percent={percent} />
      </ProgressBarProgress>
    </ProgressBarContainer>
  )
}

LineProgressBar.propTypes = propTypes
