import React from 'react'
import classNames from 'classnames'
import { ButtonVariant, OmittedTypes } from './types'
import s from './Button.module.scss'

interface BaseButtonProps {
  /** React node */
  children?: React.ReactNode
  /**
   * One button variant combinations
   *
   * buttons may be one of a variety of visual variants such as:
   *
   * @default 'primary'
   */
  variant?: ButtonVariant
  /**
   * Renders one of the selected sizes
   *
   * @default base
   * */
  size?: 'small' | 'medium' | 'base' | 'large'
  /**
   * Text alignment inside the button
   *
   * @default center
   * */
  textAlign?: 'left' | 'center' | 'right'
  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled?: boolean
  /**
   * Optionally specify a block to render with full width
   *
   * @default false
   * */
  block?: boolean
  /**
   * The loading indicator
   */
  loading?: boolean
  /**
   * The main icon for the button
   *
   * @type ReactNode
   * */
  iconButton?: React.ReactNode
  /**
   * The before icon for the button
   *
   * @type ReactNode
   * */
  before?: React.ReactNode
  /**
   * The after icon for the button
   *
   * @type ReactNode
   * */
  after?: React.ReactNode
  /** Optionally specify a href to render a `<a>` tag styled as a button */
  href?: string
  /**
   *  Set the original html type of button
   *
   *  @default button
   *  */
  type?: 'button' | 'reset' | 'submit'
  /**
   * String passed as HTML class attribute
   */
  className?: string
}

type AnchorButtonProps = BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, OmittedTypes>

type NativeButtonProps = BaseButtonProps & Omit<React.ButtonHTMLAttributes<any>, OmittedTypes>

type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>

/**
 * Buttons allow users take actions with a single click.
 * They should be clear indications that they're triggering an action,
 * buttons should be easy to find among other UI.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  disabled = false,
  variant = 'primary',
  size,
  href,
  block = false,
  iconButton,
  before,
  after,
  type = 'button',
  textAlign = 'center',
  loading = false,
  ...otherProps
}) => {

  const props = {
    className: classNames(s.base, {
        [s.iconButton]: iconButton,
        // variant
        [s.primary]: variant === 'primary',
        [s.outline]: variant === 'outline',
        [s.invisible]: variant === 'invisible',
        [s.default]: variant === 'default',
        // size
        [s.small]: size === 'small',
        [s.medium]: size === 'medium',
        [s.large]: size === 'large',
        // text align
        [s.left]: textAlign === 'left',
        [s.center]: textAlign === 'center',
        [s.right]: textAlign === 'right',
        // state
        [s.block]: block,
        [s.disabled]: disabled || loading
      },
      className
    ),
    disabled,
    type,
    ...otherProps
  }

  const afterContent = loading ? loadingIcon : after

  const contentIconButton = (
    <span className={s.wrapper}>
      {iconButton}
    </span>
  )

  const contentButton = (
    <div className={s.wrapper}>
      {renderBefore(before)}
      {renderChildren(children)}
      {renderAfter(afterContent)}
    </div>
  )

  const innerButton = iconButton ? contentIconButton : contentButton

  if (href) {
    return (
      <a {...props} href={href}>{innerButton}</a>
    )
  }

  return (
    <button {...props}>{innerButton}</button>
  )
}

const loadingIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' className={s.loader} viewBox='25 25 50 50'>
    <circle className={s.loaderPath} cx='50' cy='50' r='20' fill='none' strokeMiterlimit='10' />
  </svg>
)

const renderChildren = (
  children?: React.ReactNode
) =>
  children
    ? <span className={s.children}>{children}</span>
    : null

const renderBefore = (
  before?: React.ReactNode
) =>
  before
    ? <span className={s.before}>{before}</span>
    : null

const renderAfter = (
  after?: React.ReactNode
) =>
  after
    ? <span className={s.after}>{after}</span>
    : null
