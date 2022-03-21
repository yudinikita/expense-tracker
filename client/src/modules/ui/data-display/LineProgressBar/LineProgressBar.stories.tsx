import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { LineProgressBar } from './LineProgressBar'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Data Display/LineProgressBar',
  component: LineProgressBar
} as ComponentMeta<typeof LineProgressBar>

const Template: ComponentStory<typeof LineProgressBar> = (args) => <LineProgressBar {...args} />

export const Default = Template.bind({})

Default.args = {}

export const Custom = Template.bind({})

Custom.args = {
  percent: 75,
  height: 50,
  width: 250,
  color: '#ff6f00'
}
