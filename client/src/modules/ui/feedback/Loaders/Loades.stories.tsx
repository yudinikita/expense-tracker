import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Loaders } from './Loaders'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Feedback/Loaders',
  component: Loaders
} as ComponentMeta<typeof Loaders>

const Template: ComponentStory<typeof Loaders> = (args) => <Loaders {...args} />

export const Default = Template.bind({})

Default.args = {}

export const Logo = Template.bind({})

Logo.args = {
  variant: 'logo'
}
