import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Balance } from './Balance'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Common/Balance',
  component: Balance,
  argTypes: {
    balancePerDate: {
      control: { type: 'number' }
    }
  }
} as ComponentMeta<typeof Balance>

const Template: ComponentStory<typeof Balance> = (args) => <Balance {...args} />

export const Default = Template.bind({})

Default.args = {}
