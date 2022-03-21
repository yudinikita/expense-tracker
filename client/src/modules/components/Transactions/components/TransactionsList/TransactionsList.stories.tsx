import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { transactionsListMock } from 'modules/__mocks__'
import { TransactionsList } from './TransactionsList'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/TransactionsList',
  component: TransactionsList
} as ComponentMeta<typeof TransactionsList>

const Template: ComponentStory<typeof TransactionsList> = (args) => <TransactionsList {...args} />

export const Default = Template.bind({})

Default.args = {
  transactions: transactionsListMock
}

export const Empty = Template.bind({})

Empty.args = {
  transactions: []
}

export const Loading = Template.bind({})

Loading.args = {
  transactions: [],
  loading: true
}

export const Error = Template.bind({})

Error.args = {
  transactions: [],
  loading: false,
  error: {}
}
