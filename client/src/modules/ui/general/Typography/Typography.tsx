import React from 'react'
import classNames from 'classnames'
import { TypographyAlign, TypographyType, TypographyVariants } from './types'
import s from './Typography.module.scss'

interface TypographyProps {
  /**
   * Set the text-align on the component.
   *
   * @default inherit
   */
  textAlign?: TypographyAlign
  /**
   * Applies the theme typography styles.
   *
   * @default text
   */
  variant?: TypographyVariants
  /**
   * Applies the theme typography type.
   *
   * @default default
   */
  type?: TypographyType
  /**
   * @default undefined
   */
  fontSize?: number
  /**
   * The content of the component.
   */
  children?: React.ReactNode
  /**
   * String passed as HTML class attribute.
   */
  className?: string
  /**
   * Style HTML attribute.
   */
  style?: React.CSSProperties
}

/**
 * Typography works by principle of accessibility before aesthetics.
 * Therefore, the text should be readable and help the user understand
 * what’s important by well contrasted size and colors hierarchy.
 */
export const Typography: React.FC<TypographyProps> = ({
  className = '',
  textAlign = 'inherit',
  variant = 'text',
  type = 'default',
  fontSize,
  style,
  children,
  ...otherProps
}) => {

  const customStyle: React.CSSProperties = {
    fontSize,
    textAlign,
    ...style
  }

  const props = {
    className: classNames(s.base, {
      // variant
      [s.title]: variant === 'title',
      [s.h1]: variant === 'h1',
      [s.h2]: variant === 'h2',
      [s.h3]: variant === 'h3',
      [s.h4]: variant === 'h4',
      [s.h5]: variant === 'h5',
      [s.h6]: variant === 'h6',
      [s.p]: variant === 'p',
      [s.text]: variant === 'text',
      [s.link]: variant === 'link',
      // type
      [s.secondary]: type === 'secondary',
      [s.success]: type === 'success',
      [s.warning]: type === 'warning',
      [s.danger]: type === 'danger',
      [s.disabled]: type === 'disabled',
      [s.underline]: type === 'underline',
      [s.delete]: type === 'delete',
      [s.strong]: type === 'strong',
      [s.italic]: type === 'italic',
    }, className),
    style: { ...customStyle },
    ...otherProps
  }

  switch (variant) {
    case 'title':
      return (
        <h1 {...props}>{children}</h1>
      )
    case 'h1':
      return (
        <h1 {...props}>{children}</h1>
      )
    case 'h2':
      return (
        <h2 {...props}>{children}</h2>
      )
    case 'h3':
      return (
        <h3 {...props}>{children}</h3>
      )
    case 'h4':
      return (
        <h4 {...props}>{children}</h4>
      )
    case 'h5':
      return (
        <h5 {...props}>{children}</h5>
      )
    case 'h6':
      return (
        <h6 {...props}>{children}</h6>
      )
    case 'p':
      return (
        <p {...props}>{children}</p>
      )
    case 'text':
      return (
        <span {...props}>{children}</span>
      )
    case 'link':
      return (
        <span {...props}>{children}</span>
      )
    default:
      return (
        <span {...props}>{children}</span>
      )
  }
}
