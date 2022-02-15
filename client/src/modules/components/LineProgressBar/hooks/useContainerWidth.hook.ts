import { RefObject, useEffect, useState } from 'react'

export const useContainerWidth = (containerRef: RefObject<HTMLDivElement>, width?: number) => {
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    if (containerRef?.current === null || containerRef?.current === undefined) {
      return
    }

    if (width !== undefined) {
      setContainerWidth(width)
      return
    }

    setContainerWidth(containerRef?.current?.offsetWidth)
  }, [width, containerRef])

  return containerWidth
}
