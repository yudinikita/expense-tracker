import React from 'react'
import classNames from 'classnames'
import s from './TextArea.module.scss'

interface BaseTextAreaProps<T = HTMLTextAreaElement> {
  /**
   * HTML global id attribute, unique in the whole document
   */
  id?: string
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
   * Count rows for textarea
   *
   * @default 4
   * */
  rows?: number
  /**
   * Text to be displayed as the form placeholder
   * */
  placeholder?: string
  /**
   * A boolean flag indicating an error
   * */
  invalid?: boolean
  /**
   * Indicates that the control is not available for interaction
   * */
  disabled?: React.TextareaHTMLAttributes<T>['disabled']
  /**
   * Makes textarea required
   * */
  required?: React.TextareaHTMLAttributes<T>['required']
  /**
   * Makes textarea readOnly
   * */
  readOnly?: React.TextareaHTMLAttributes<T>['readOnly']
  /**
   * The validation text displayed after the textarea field
   * */
  validationText?: string
  /**
   * String passed as HTML class attribute
   */
  className?: string
}

export type TextAreaProps = BaseTextAreaProps & Omit<React.TextareaHTMLAttributes<any>, 'rows'>

export const TextArea: React.FC<TextAreaProps> = ({
  className = '',
  id = 'textarea-input',
  block = false,
  disabled,
  label = '',
  placeholder = ' ',
  validationText,
  required,
  invalid,
  readOnly,
  rows = 4,
  ...otherProps
}) => {

  const classNameWrapper = classNames(s.textareaWrapper, className, {
    [s.block]: block,
    [s.disabled]: disabled,
    [s.invalid]: invalid,
    [s.activeLabel]: placeholder !== ' '
  })

  const props = {
    className: s.textarea,
    id,
    disabled,
    required,
    invalid,
    readOnly,
    ...otherProps
  }

  return (
    <div className={s.textareaContainer}>
      <label htmlFor={id} className={classNameWrapper}>
        <textarea
          {...props}
          placeholder={placeholder}
          aria-invalid={invalid}
          aria-readonly={readOnly}
          aria-disabled={disabled}
          rows={rows}
        />
        {renderLabel(label)}
      </label>
      {renderValidationText(validationText)}
    </div>
  )
}

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
