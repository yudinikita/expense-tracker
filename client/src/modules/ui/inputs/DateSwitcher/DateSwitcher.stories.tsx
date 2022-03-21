import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DateSwitcher } from './DateSwitcher'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Inputs/DateSwitcher',
  component: DateSwitcher
} as ComponentMeta<typeof DateSwitcher>

const Template: ComponentStory<typeof DateSwitcher> = (args) => <DateSwitcher  {...args} />

export const Default = Template.bind({})

Default.args = {}
