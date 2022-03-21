import React from 'react'
import { Input, InputProps } from 'modules/ui'
import { OmittedTypes } from './types'

export type DatePickerProps = Omit<InputProps, OmittedTypes>

export const DatePicker: React.FC<DatePickerProps> = (
  props
) => {

  return (
    <Input
      {...props}
      type='datetime-local'
    />
  )

}
