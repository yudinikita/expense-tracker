import React from 'react'
import { ComponentMeta } from '@storybook/react'
import withFormik from 'storybook-formik'
import { DatepickerDate } from './DatepickerDate'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/Form/DatepickerDate',
  decorators: [withFormik]
} as ComponentMeta<typeof DatepickerDate>

export const DatepickerDateDefault = () => (
  <DatepickerDate
    name='date'
    label='Date'
  />
)

DatepickerDateDefault.parameters = {
  formik: {
    initialValues: {
      date: ''
    }
  }
}
