import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TransactionsDetail } from './TransactionsDetail'
import { withAlert } from 'stories/decorators'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Transactions/TransactionsDetail',
  component: TransactionsDetail,
  argTypes: {
    commentary: { control: { type: 'text' } },
    createdAt: { control: { type: 'date' } }
  },
  decorators: [withAlert]
} as ComponentMeta<typeof TransactionsDetail>

const Template: ComponentStory<typeof TransactionsDetail> = (args) => <TransactionsDetail {...args} />

export const Default = Template.bind({})

Default.args = {}

export const Custom = Template.bind({})

Custom.args = {
  amount: 42,
  categoryTitle: 'Category Title',
  commentary: 'Test commentary',
  createdAt: '01.12.2022'
}
