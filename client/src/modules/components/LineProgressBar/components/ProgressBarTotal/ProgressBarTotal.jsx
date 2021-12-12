import React from 'react'
import PropTypes from 'prop-types'
import { useProgressBarTotal } from './hooks'
import { ProgressBarContainer } from '../ProgressBarContainer'
import { ProgressBarProgress } from '../ProgressBarProgress'

const propTypes = {
  array: PropTypes.array,
  height: PropTypes.number,
  width: PropTypes.number,
  containerRef: PropTypes.object,
}

export const ProgressBarTotal = ({ array, containerRef, width, height }) => {
  const { getProgressOffset } = useProgressBarTotal(containerRef, width)

  return (
    <ProgressBarContainer containerRef={containerRef} height={height}>
      {array.map(item =>
        <ProgressBarProgress
          key={item?.id}
          color={item?.color}
          progressOffset={getProgressOffset(item?.percent)}
        />
      )}
    </ProgressBarContainer>
  )
}

ProgressBarTotal.propTypes = propTypes
