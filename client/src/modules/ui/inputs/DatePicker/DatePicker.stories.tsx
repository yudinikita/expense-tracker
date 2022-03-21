import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DatePicker } from './DatePicker'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Inputs/DatePicker',
  component: DatePicker,
  argTypes: {
    onClick: { action: true }
  }
} as ComponentMeta<typeof DatePicker>

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Created at'
}
