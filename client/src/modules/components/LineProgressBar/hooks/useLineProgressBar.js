import { useMemo, useRef } from 'react'
import { useContainerWidth } from './useContainerWidth.hook'

export const useLineProgressBar = (width, percent) => {
  const containerRef = useRef(null)
  const containerWidth = useContainerWidth(containerRef, width)

  const progressOffset = useMemo(() => containerWidth / 100 * percent, [containerWidth, percent])

  return { containerRef, progressOffset }
}
