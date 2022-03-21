import React from 'react'
import { useField } from 'formik'
import { DatePicker, DatePickerProps } from 'modules/ui'

export const DatepickerDate: React.FC<DatePickerProps> = (props: any) => {
  const [field, meta] = useField(props)

  const validationText = meta.touched && meta.error ? meta.error : null

  return (
    <>
      <DatePicker
        validationText={validationText}
        {...field}
        {...props}
      />
    </>
  )
}
