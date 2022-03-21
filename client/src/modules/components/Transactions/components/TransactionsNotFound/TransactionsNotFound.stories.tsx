import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TransactionsNotFound } from './TransactionsNotFound'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/TransactionsNotFound',
  component: TransactionsNotFound
} as ComponentMeta<typeof TransactionsNotFound>

const Template: ComponentStory<typeof TransactionsNotFound> = (args) => <TransactionsNotFound {...args} />

export const Default = Template.bind({})

Default.args = {}
