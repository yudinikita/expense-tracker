import { useEffect, useState } from 'react'

export const useContainerWidth = (containerRef, width) => {
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (!containerRef.current) {
      return
    }
    if (width !== undefined) {
      setContainerWidth(width)
      return
    }
    setContainerWidth(containerRef.current.offsetWidth)
  }, [width, containerRef])

  return containerWidth
}
