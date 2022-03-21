import React from 'react'
import { ComponentMeta } from '@storybook/react'
import withFormik from 'storybook-formik'
import { InputCommentary } from './InputCommentary'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/Form/InputCommentary',
  decorators: [withFormik]
} as ComponentMeta<typeof InputCommentary>

export const InputCommentaryDefault = () => (
  <InputCommentary
    name='commentary'
    label='Commentary'
  />
)

InputCommentaryDefault.parameters = {
  formik: {
    initialValues: {
      commentary: ''
    }
  }
}
