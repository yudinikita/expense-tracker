import { useContainerWidth } from '../../../hooks/useContainerWidth.hook'

export const useProgressBarTotal = (containerRef, width) => {
  const containerWidth = useContainerWidth(containerRef, width)
  const getProgressOffset = (percent) => containerWidth / 100 * percent

  return { getProgressOffset }
}
