import { RefObject } from 'react'
import { useContainerWidth } from '../../../hooks/useContainerWidth.hook'

export const useProgressBarTotal = (containerRef: RefObject<HTMLDivElement>, width?: number) => {
  const containerWidth = useContainerWidth(containerRef, width)
  const getProgressOffset = (percent: number) => containerWidth / 100 * percent

  return { getProgressOffset }
}
