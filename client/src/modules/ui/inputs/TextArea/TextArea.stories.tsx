import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextArea } from './TextArea'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Inputs/TextArea',
  component: TextArea,
  argTypes: {
    onClick: { action: true },
    onChange: { action: true }
  }
} as ComponentMeta<typeof TextArea>

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea  {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Commentary'
}

export const WithFullWidth = Template.bind({})

WithFullWidth.args = {
  label: 'Full width',
  block: true
}

export const WithMaxLength = Template.bind({})

WithMaxLength.args = {
  label: 'maxLength is 7',
  maxLength: 7
}

export const WithRows = Template.bind({})

WithRows.args = {
  label: 'Rows is 1',
  rows: 1
}
