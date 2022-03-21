import React from 'react'
import InlineSVG from 'react-inlinesvg'

interface CustomSvgIconProps {
  src?: string
  onClick?: React.MouseEventHandler<any>
  width?: number
  height?: number
  className?: string
  title?: string
  style?: React.CSSProperties
}

export const CustomSvgIcon: React.FC<CustomSvgIconProps> = ({
  src = '',
  onClick,
  width,
  height,
  className = '',
  title = '',
  style
}) => {

  const customIconSize = width && height ? { width, height } : null

  const props = {
    ...customIconSize,
    src,
    onClick,
    className,
    title,
    style
  }

  return (
    <InlineSVG {...props} />
  )
}
