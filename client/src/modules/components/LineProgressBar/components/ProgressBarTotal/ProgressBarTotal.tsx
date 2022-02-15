import React, { RefObject } from 'react'
import { useProgressBarTotal } from './hooks'
import { ProgressBarContainer } from '../ProgressBarContainer'
import { ProgressBarProgress } from '../ProgressBarProgress'

interface Props {
  array: any[]
  height?: number
  width?: number
  containerRef: RefObject<HTMLDivElement>
}

export const ProgressBarTotal: React.FC<Props> = ({
  array,
  containerRef,
  width,
  height
}) => {
  const { getProgressOffset } = useProgressBarTotal(containerRef, width)

  return (
    <ProgressBarContainer containerRef={containerRef} height={height}>
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
