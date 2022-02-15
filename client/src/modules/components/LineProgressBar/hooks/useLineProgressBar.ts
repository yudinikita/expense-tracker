import { useMemo, useRef } from 'react'
import { useContainerWidth } from './useContainerWidth.hook'

export const useLineProgressBar = (percent: number, width?: number) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const containerWidth = useContainerWidth(containerRef, width)

  const progressOffset = useMemo(() => containerWidth / 100 * percent, [containerWidth, percent])

  return { containerRef, progressOffset }
}
