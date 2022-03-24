import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayoutPage } from 'stories/decorators'
import { default as SettingsPage } from './SettingsPage'
import 'modules/styles/main.scss'

export default {
  title: 'Pages/Settings/SettingsPage',
  component: SettingsPage,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [withMainLayoutPage]
} as ComponentMeta<typeof SettingsPage>

const PageTemplate: ComponentStory<typeof SettingsPage> = () => <SettingsPage />

export const Default = PageTemplate.bind({})
