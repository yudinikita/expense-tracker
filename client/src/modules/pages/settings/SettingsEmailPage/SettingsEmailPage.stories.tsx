import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayoutPage, withUserAuth } from 'stories/decorators'
import { SettingsEmailPage } from './SettingsEmailPage'
import 'modules/styles/main.scss'

export default {
  title: 'Pages/Settings/SettingsEmailPage',
  component: SettingsEmailPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withUserAuth, withMainLayoutPage]
} as ComponentMeta<typeof SettingsEmailPage>

const PageTemplate: ComponentStory<typeof SettingsEmailPage> = () => <SettingsEmailPage />

export const Default = PageTemplate.bind({})
