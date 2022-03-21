import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withUserAuth } from 'stories/decorators'
import { SettingsEmail } from './SettingsEmail'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Settings/SettingsEmail',
  component: SettingsEmail,
  decorators: [withUserAuth]
} as ComponentMeta<typeof SettingsEmail>

const Template: ComponentStory<typeof SettingsEmail> = () => <SettingsEmail />

export const Default = Template.bind({})
