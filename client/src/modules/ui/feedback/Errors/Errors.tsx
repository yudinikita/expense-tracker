import React from 'react'
import { ErrorDefault } from './list/ErrorDefault'
import s from './Errors.module.scss'

type ErrorVariants = 'default'

interface ErrorsProps {
  /**
   * Renders one of the selected visual styles
   *
   * @default default
   */
  variant?: ErrorVariants
}

export const Errors: React.FC<ErrorsProps> = ({
  variant = 'default',
  ...otherProps
}) => {

  const props = {
    ...otherProps
  }

  const renderError = (error?: React.ReactNode) => (
    <div
      {...props}
      className={s.error}
    >
      {error ?? 'Error'}
    </div>
  )

  return renderError(<ErrorDefault />)
}
