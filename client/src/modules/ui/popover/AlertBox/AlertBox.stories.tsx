import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AlertBox } from './AlertBox'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Popover/AlertBox',
  component: AlertBox,
  argTypes: {
    options: {
      control: false
    }
  }
} as ComponentMeta<typeof AlertBox>

const Template: ComponentStory<typeof AlertBox> = (args) => <AlertBox {...args} />

export const Default = Template.bind({})

Default.args = {
  options: {
    type: 'info'
  },
  message: 'Default message'
}

export const Info = Template.bind({})

Info.args = {
  options: {
    type: 'info'
  },
  message: 'Info message'
}

export const Success = Template.bind({})

Success.args = {
  options: {
    type: 'success'
  },
  message: 'Success message'
}

export const Error = Template.bind({})

Error.args = {
  options: {
    type: 'error'
  },
  message: 'Error message'
}

export const Overflow = Template.bind({})

const bigText = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed laoreet quam et justo ultrices, sed tempor ipsum tempus.
  Praesent porta imperdiet egestas.
  Mauris a sapien lacus. Cras rhoncus augue vitae euismod dignissim.
  In ac massa sed nunc imperdiet auctor ut at erat.
  Phasellus placerat venenatis odio.
  Phasellus mi nunc, feugiat a bibendum at, iaculis ut erat.
  Donec rhoncus eget justo ut sodales.
`

Overflow.args = {
  options: {
    type: 'success'
  },
  message: bigText
}
