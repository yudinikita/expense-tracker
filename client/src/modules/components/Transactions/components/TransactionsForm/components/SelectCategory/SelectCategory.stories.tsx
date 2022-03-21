import React from 'react'
import { ComponentMeta } from '@storybook/react'
import withFormik from 'storybook-formik'
import { SelectCategory } from './SelectCategory'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/Form/SelectCategory',
  decorators: [withFormik]
} as ComponentMeta<typeof SelectCategory>

export const SelectCategoryDefault = () => (
  <SelectCategory
    name='category'
    label='Category'
    placeholder='Select category'
  >
    <option value='1'>Home</option>
    <option value='2'>Job</option>
    <option value='3'>Other</option>
  </SelectCategory>
)

SelectCategoryDefault.parameters = {
  formik: {
    initialValues: {
      category: ''
    }
  }
}
