import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Errors } from './Errors'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Feedback/Errors',
  component: Errors
} as ComponentMeta<typeof Errors>

const Template: ComponentStory<typeof Errors> = (args) => <Errors {...args} />

export const Default = Template.bind({})

Default.args = {}
