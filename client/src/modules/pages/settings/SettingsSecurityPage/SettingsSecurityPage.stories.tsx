import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayoutPage } from 'stories/decorators'
import { SettingsSecurityPage } from './SettingsSecurityPage'
import 'modules/styles/main.scss'

export default {
  title: 'Pages/Settings/SettingsSecurityPage',
  component: SettingsSecurityPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withMainLayoutPage]
} as ComponentMeta<typeof SettingsSecurityPage>

const PageTemplate: ComponentStory<typeof SettingsSecurityPage> = () => <SettingsSecurityPage />

export const Default = PageTemplate.bind({})
