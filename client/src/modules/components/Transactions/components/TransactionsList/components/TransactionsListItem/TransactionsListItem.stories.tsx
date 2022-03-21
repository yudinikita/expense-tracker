import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TransactionsListItem } from './TransactionsListItem'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/TransactionsListItem',
  component: TransactionsListItem
} as ComponentMeta<typeof TransactionsListItem>

const Template: ComponentStory<typeof TransactionsListItem> = (args) => <TransactionsListItem {...args} />

export const Default = Template.bind({})

Default.args = {}
