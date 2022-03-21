import React from 'react'
import { ComponentMeta } from '@storybook/react'
import withFormik from 'storybook-formik'
import { InputAmount } from './InputAmount'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/Form/InputAmount',
  decorators: [withFormik]
} as ComponentMeta<typeof InputAmount>

export const InputAmountDefault = () => (
  <InputAmount
    name='amount'
    label='Amount'
    placeholder='Amount'
    prefix={'+'}
    suffix={'$'}
  />
)

InputAmountDefault.parameters = {
  formik: {
    initialValues: {
      amount: ''
    }
  }
}
