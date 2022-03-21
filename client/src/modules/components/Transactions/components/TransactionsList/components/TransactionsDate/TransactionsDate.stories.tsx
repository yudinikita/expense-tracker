import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TransactionsDate } from './TransactionsDate'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/TransactionsDate',
  component: TransactionsDate
} as ComponentMeta<typeof TransactionsDate>

const Template: ComponentStory<typeof TransactionsDate> = (args) => <TransactionsDate {...args} />

export const Default = Template.bind({})

Default.args = {
  date: '10 January, saturday'
}
