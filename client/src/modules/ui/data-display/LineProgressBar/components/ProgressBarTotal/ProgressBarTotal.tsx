import React, { RefObject } from 'react'
import { useProgressBarTotal } from './hooks'
import { ProgressBarContainer } from '../ProgressBarContainer'
import { ProgressBarProgress } from '../ProgressBarProgress'

interface ProgressBarTotalProps {
  containerRef: RefObject<HTMLDivElement>
  height?: number
  width?: number
  array: any[]
}

export const ProgressBarTotal: React.FC<ProgressBarTotalProps> = ({
  array,
  containerRef,
  width,
  height
}) => {
  const { getProgressOffset } = useProgressBarTotal(containerRef, width)

  return (
    <ProgressBarContainer
      containerRef={containerRef}
      height={height}
    >
      {array?.map(item =>
        <ProgressBarProgress
          key={item?.id}
          color={item?.color}
          progressOffset={getProgressOffset(item?.percent)}
        />
      )}
    </ProgressBarContainer>
  )
}
