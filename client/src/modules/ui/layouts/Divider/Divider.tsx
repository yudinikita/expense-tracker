import React, { useMemo } from 'react'
import classNames from 'classnames'
import { DividerTypes, DividerVariants } from './types'
import s from './Divider.module.scss'

interface DividerProps {
  /**
   * Applies the theme divider styles.
   *
   * @default invisible
   */
  variant?: DividerVariants
  /**
   * Applies the theme divider types.
   *
   * @default horizontal
   */
  type?: DividerTypes
  /**
   * The size of the space above and below.
   *
   * @default undefined
   */
  space?: number | [number, number]
  /**
   * String passed as HTML class attribute.
   */
  className?: string
}

/**
 * A divider line separates different content.
 */
export const Divider: React.FC<DividerProps> = ({
  variant = 'invisible',
  type = 'horizontal',
  space,
  className
}) => {

  const [top, bottom] = useMemo(
    () => (
      (Array.isArray(space) ? space : [space, space]) as [number, number])
      .map(item => item),
    [space]
  )

  const style = {
    marginTop: top,
    marginBottom: bottom,
  }

  const props = {
    className: classNames(s.base, {
      [s.solid]: variant === 'solid',
      [s.dashed]: variant === 'dashed',
      [s.horizontal]: type === 'horizontal',
      [s.vertical]: type === 'vertical',
    }, className),
    style: { ...style }
  }

  return (
    <div
      role='separator'
      {...props}
    />
  )
}
