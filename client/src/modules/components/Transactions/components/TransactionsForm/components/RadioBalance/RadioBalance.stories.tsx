import React from 'react'
import { ComponentMeta } from '@storybook/react'
import withFormik from 'storybook-formik'
import { RadioBalance } from './RadioBalance'
import 'modules/styles/main.scss'
import { Space } from 'modules/ui'

export default {
  title: 'Components/Transactions/Form/RadioBalance',
  decorators: [withFormik]
} as ComponentMeta<typeof RadioBalance>

export const RadioBalanceDefault = () => (
  <Space>
    <RadioBalance name='balance' id='balance-expense' value='expense'>Expense</RadioBalance>
    <RadioBalance name='balance' id='balance-income' value='income'>Income</RadioBalance>
  </Space>
)

RadioBalanceDefault.parameters = {
  formik: {
    initialValues: {
      balance: 'expense'
    }
  }
}
