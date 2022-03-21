import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayoutPage, withSettingsContext } from 'stories/decorators'
import { SettingsAppearancePage } from './SettingsAppearancePage'
import 'modules/styles/main.scss'

export default {
  title: 'Pages/Settings/SettingsAppearancePage',
  component: SettingsAppearancePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withMainLayoutPage, withSettingsContext]
} as ComponentMeta<typeof SettingsAppearancePage>

const PageTemplate: ComponentStory<typeof SettingsAppearancePage> = () => <SettingsAppearancePage />

export const Default = PageTemplate.bind({})
