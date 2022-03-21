import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayoutPage, withSettingsContext } from 'stories/decorators'
import { SettingsLanguagePage } from './SettingsLanguagePage'
import 'modules/styles/main.scss'

export default {
  title: 'Pages/Settings/SettingsLanguagePage',
  component: SettingsLanguagePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withMainLayoutPage, withSettingsContext]
} as ComponentMeta<typeof SettingsLanguagePage>

const Template: ComponentStory<typeof SettingsLanguagePage> = (args) => <SettingsLanguagePage {...args} />

export const Default = Template.bind({})

Default.args = {}
