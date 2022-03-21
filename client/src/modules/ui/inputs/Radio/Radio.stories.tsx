import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Space } from 'modules/ui'
import { Radio } from './Radio'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Inputs/Radio',
  component: Radio,
  argTypes: {
    onClick: { action: true }
  }
} as ComponentMeta<typeof Radio>

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'First'
}

const TemplateMultipleRadios: ComponentStory<typeof Radio> = (args) => (
  <Space>
    <Radio{...args} name='multiple' id='first-radio'>First</Radio>
    <Radio{...args} name='multiple' id='second-radio'>Second</Radio>
  </Space>
)

export const MultipleRadios = TemplateMultipleRadios.bind({})

MultipleRadios.args = {
  children: 'First'
}
