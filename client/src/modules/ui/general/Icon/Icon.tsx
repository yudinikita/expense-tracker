import React, { ElementType } from 'react'
import classNames from 'classnames'
import { CustomSvgIcon } from './CustomSvgIconю'
import s from './Icon.module.scss'

type IconType = 'SVG' | 'SRC'

interface IconProps {
  /**
   * We support three types of icons - SVG and SRC so this prop is either the name of the icon or the component
   */
  icon?: string | ElementType
  /**
   * The type of the component - svg or custom svg (using react-inlinesvg)
   *
   * @default SVG
   */
  iconType?: IconType
  /**
   * Size for icon
   */
  iconSize?: number
  /**
   * An `onClick` event handler
   */
  onClick?: React.MouseEventHandler<any>
  /**
   * HTML style attribute
   */
  style?: React.CSSProperties
  /**
   * String passed as HTML class attribute
   */
  className?: string
  /**
   * Title passed as HTML class attribute
   */
  title?: string
}

/**
 * Icon component is our component to unify the supported icon types
 *
 * Full set icons: https://teenyicons.com/
 */
export const Icon: React.FC<IconProps> = ({
  icon = '',
  iconType,
  style,
  onClick,
  iconSize,
  title,
  className
}) => {

  const customIconSize = iconSize ? { width: iconSize, height: iconSize } : null

  const props = {
    ...customIconSize,
    className: classNames(s.icon, className),
    onClick,
    title,
    style
  }

  if (!icon) {
    return null
  }

  const isFunctionType = typeof icon === 'function'

  if (iconType === 'SVG' || isFunctionType) {
    const IconComponent = icon as ElementType

    return (
      <IconComponent
        {...props}
      />
    )
  }

  return (
    <CustomSvgIcon src={icon as string} {...props} />
  )
}
