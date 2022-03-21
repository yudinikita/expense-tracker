import React, { useEffect } from 'react'
import { useField } from 'formik'
import { Select, SelectProps } from 'modules/ui'
import { useNavigate } from 'react-router-dom'

export const SelectCategory: React.FC<SelectProps> = (props: any) => {
  const [field, meta] = useField(props)
  const navigate = useNavigate()

  const validationText = meta.touched && meta.error ? meta.error : null

  const invalid = meta.touched && Boolean(meta.error) ? true : null
  
  useEffect(() => {
    if (field.value === 'create') navigate('/categories')
  }, [field.value])

  return (
    <>
      <Select
        validationText={validationText}
        invalid={invalid}
        {...field}
        {...props}
      />
    </>
  )
}
