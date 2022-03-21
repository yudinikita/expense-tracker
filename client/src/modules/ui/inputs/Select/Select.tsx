import React from 'react'
import classNames from 'classnames'
import { Input } from '../Input'
import s from './Select.module.scss'

interface BaseSelectProps<T = HTMLSelectElement> {
  /**
   * String passed as HTML class attribute
   */
  className?: string
  /**
   * Text to be displayed as the form label
   * */
  label?: string
  /**
   * Optionally specify a block to render with full width
   *
   * @default false
   * */
  block?: boolean
  /**
   * A boolean flag indicating an error
   * */
  invalid?: boolean
  /**
   * Indicates that the control is not available for interaction
   * */
  disabled?: React.SelectHTMLAttributes<T>['disabled']
  /**
   * Makes select required
   * */
  required?: React.SelectHTMLAttributes<T>['required']
  /**
   * Use native dropdown list
   * */
  nativeDropdown?: boolean
  /**
   * Search the options while expanded
   * */
  showSearch?: boolean
  /**
   * The validation text displayed after the input field
   * */
  validationText?: string
  /** React node */
  children?: React.ReactNode
}

export type SelectProps = BaseSelectProps & React.SelectHTMLAttributes<any>

export const Select: React.FC<SelectProps> = ({
  className = '',
  id = 'base-select',
  block = false,
  nativeDropdown = false,
  label = '',
  placeholder = '',
  disabled,
  required,
  invalid,
  showSearch,
  validationText,
  children,
  ...otherProps
}) => {

  const classNameWrapper = classNames({
    [s.selectWrapper]: !showSearch,
    [s.block]: block,
    [s.disabled]: disabled,
    [s.invalid]: invalid,
    [s.activeLabel]: placeholder !== ' '
  }, className)

  const props = {
    label,
    disabled,
    required,
    ...otherProps
  }

  if (showSearch) {
    return (
      <div className={classNameWrapper}>
        <Input
          className={s.datalistInput}
          list={id}
          placeholder={placeholder}
          {...props}
        />
        <datalist
          id={id}
          aria-invalid={invalid}
          aria-disabled={disabled}
        >
          {children}
        </datalist>
        {renderValidationText(validationText)}
      </div>
    )
  }

  return (
    <div className={s.selectContainer}>
      <label htmlFor={id} className={classNameWrapper}>
        <select
          id={id}
          className={s.select}
          value=''
          {...props}
        >
          {renderPlaceholder(placeholder)}
          {children}
        </select>
        {renderLabel(label)}
      </label>
      {renderValidationText(validationText)}
    </div>
  )
}

const renderPlaceholder = (placeholder?: string) =>
  placeholder
    ? <option disabled value='' hidden>{placeholder}</option>
    : null

const renderLabel = (label?: string) =>
  label
    ? <span className={s.label}>{label}</span>
    : null

const renderValidationText = (text?: string) =>
  text
    ? (
      <div className={s.validationContainer}>
        <span className={s.validationText}>{text}</span>
      </div>
    )
    : null
