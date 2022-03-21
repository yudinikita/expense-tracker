import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import withFormik, { DecoratorParams } from 'storybook-formik'
import { TransactionsSubform } from './TransactionsSubform'
import { transactionFormInitialValues, TransactionFormValues } from '../../types'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/Form/TransactionsSubform',
  component: TransactionsSubform,
  decorators: [withFormik]
} as ComponentMeta<typeof TransactionsSubform>

const Template: ComponentStory<typeof TransactionsSubform> = (args) => <TransactionsSubform {...args} />

export const Default = Template.bind({})

const personalInfoParams: DecoratorParams<TransactionFormValues> = {
  formik: {
    initialValues: transactionFormInitialValues
  }
}

Default.parameters = personalInfoParams

Default.args = {
  categories: [
    { id: '1', title: 'Home' },
    { id: '2', title: 'Job' },
    { id: '3', title: 'Other' }
  ]
}
