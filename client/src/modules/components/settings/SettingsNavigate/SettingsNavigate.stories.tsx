import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { SettingsNavigate } from './SettingsNavigate'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Settings/SettingsNavigate',
  component: SettingsNavigate
} as ComponentMeta<typeof SettingsNavigate>

const Template: ComponentStory<typeof SettingsNavigate> = (args) => <SettingsNavigate {...args} />

export const Default = Template.bind({})

Default.args = {}
