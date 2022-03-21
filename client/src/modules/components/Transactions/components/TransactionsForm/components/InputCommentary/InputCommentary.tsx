import React from 'react'
import { useField } from 'formik'
import { TextArea, TextAreaProps } from 'modules/ui'

export const InputCommentary: React.FC<TextAreaProps> = (props: any) => {
  const [field, meta] = useField(props)

  const validationText = meta.touched && meta.error ? meta.error : null

  return (
    <>
      <TextArea
        validationText={validationText}
        {...field}
        {...props}
      />
    </>
  )
}
