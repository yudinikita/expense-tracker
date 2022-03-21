import React, { ReactNode } from 'react'
import classNames from 'classnames'
import s from './Radio.module.scss'

interface BaseRadioProps extends React.HTMLAttributes<HTMLInputElement> {
  /**
   * Indicates that the control is not available for interaction
   */
  disabled?: boolean
  /**
   * A boolean flag indicating an error
   */
  invalid?: boolean
  /**
   * Indicates that the user must check the input
   */
  required?: boolean
  /**
   * A name that identifies the element when submitting the form
   */
  name?: string
  /**
   * Text or elements rendered as label next to the input
   */
  children?: ReactNode
  /**
   * An error message to be displayed below the form field
   * */
  validationText?: string
}

export type RadioProps = BaseRadioProps & React.InputHTMLAttributes<any>

export const Radio: React.FC<RadioProps> = ({
  id = 'basic-radio',
  name = '',
  className = '',
  disabled = false,
  invalid = false,
  required = false,
  validationText = '',
  children,
  ...otherProps
}) => {

  const classNameLabel = classNames({
    [s.disabled]: disabled,
    [s.invalid]: invalid
  })

  return (
    <div>
      <label
        className={classNameLabel}
        htmlFor={id || name}
      >
        <input
          id={id}
          name={name}
          disabled={disabled}
          required={required}
          className={classNames(s.input, className)}
          type='radio'
          {...otherProps}
        />
        <span className={s.label}>{children}</span>
      </label>
      {renderValidationText(validationText)}
    </div>
  )
}

const renderValidationText = (text?: string) =>
  text
    ? (
      <div className={s.validationContainer}>
        <span className={s.validationText}>{text}</span>
      </div>
    )
    : null
