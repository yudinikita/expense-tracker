import React from 'react'
import classNames from 'classnames'
import { OmittedTypes } from './types'
import s from './Input.module.scss'

interface BaseInputProps<T = HTMLInputElement> {
  /**
   * String passed as HTML class attribute
   */
  className?: string
  /**
   * HTML global id attribute, unique in the whole document
   */
  id?: string
  /**
   * Text to be displayed as the form label
   * */
  label?: string
  /**
   * Text to be displayed as the form placeholder
   * */
  placeholder?: string
  /**
   * Optionally specify an block to render with full width
   *
   * @default false
   * */
  block?: boolean
  /**
   * Indicates that the control is not available for interaction
   * */
  disabled?: React.InputHTMLAttributes<T>['disabled']
  /**
   * A boolean flag indicating an error
   * */
  invalid?: boolean
  /**
   * Makes input required
   * */
  required?: React.InputHTMLAttributes<T>['required']
  /**
   * Makes input readOnly
   * */
  readOnly?: React.InputHTMLAttributes<T>['readOnly']
  /**
   * String passed as HTML Input type attribute
   * */
  type?: React.HTMLInputTypeAttribute
  /**
   * The prefix icon for the Input
   *
   * @type ReactNode
   * */
  prefix?: React.ReactNode
  /**
   * The suffix icon for the Input
   *
   * @type ReactNode
   * */
  suffix?: React.ReactNode
  /**
   * The validation text displayed after the input field
   * */
  validationText?: string
}

export type InputProps = BaseInputProps & Omit<React.InputHTMLAttributes<any>, OmittedTypes>

export const Input: React.FC<InputProps> = ({
  className = '',
  id = 'basic-input',
  block = false,
  disabled,
  type = 'text',
  label = '',
  placeholder = ' ',
  validationText,
  required,
  invalid,
  readOnly,
  prefix,
  suffix,
  ...otherProps
}) => {

  const classNameWrapper = classNames(s.inputWrapper, className, {
    [s.block]: block,
    [s.disabled]: disabled,
    [s.invalid]: invalid,
    [s.activeLabel]: placeholder !== ' ' || prefix || suffix
  })

  const props = {
    className: s.input,
    disabled,
    type,
    required,
    readOnly,
    ...otherProps
  }

  return (
    <div className={s.inputContainer}>
      <label htmlFor={id || otherProps.name} className={classNameWrapper}>
        {renderPrefix(prefix)}
        <input
          {...props}
          id={id}
          placeholder={placeholder}
          aria-invalid={invalid}
          aria-readonly={readOnly}
          aria-disabled={disabled}
        />
        {renderLabel(label)}
        {renderSuffix(suffix)}
      </label>
      {renderValidationText(validationText)}
    </div>
  )
}

const renderLabel = (label?: string) =>
  label
    ? <span className={s.label}>{label}</span>
    : null

const renderPrefix = (prefix?: React.ReactNode) =>
  prefix
    ? <span className={s.prefix}>{prefix}</span>
    : null

const renderSuffix = (suffix?: React.ReactNode) =>
  suffix
    ? <span className={s.suffix}>{suffix}</span>
    : null

const renderValidationText = (text?: string) =>
  text
    ? (
      <div className={s.validationContainer}>
        <span className={s.validationText}>{text}</span>
      </div>
    )
    : null
