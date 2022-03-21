import React from 'react'
import { useField } from 'formik'
import { Input, InputProps } from 'modules/ui'

export const InputAmount: React.FC<InputProps> = (props: any) => {
  const [field, meta] = useField(props)

  const validationText = meta.touched && meta.error ? meta.error : null

  const invalid = meta.touched && Boolean(meta.error) ? true : null

  return (
    <>
      <Input
        inputMode='numeric'
        validationText={validationText}
        invalid={invalid}
        {...field}
        {...props}
      />
    </>
  )
}
