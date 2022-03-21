import React from 'react'
import { useField } from 'formik'
import { Radio, RadioProps } from 'modules/ui'

export const RadioBalance: React.FC<RadioProps> = ({ children, ...props }: any) => {
  const [field, meta] = useField({ ...props, type: 'radio' })

  const validationText = meta.touched && meta.error ? meta.error : null

  return (
    <Radio
      validationText={validationText}
      {...field}
      {...props}
    >
      {children}
    </Radio>
  )
}
