import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayoutPage, withSettingsContext } from 'stories/decorators'
import { SettingsCurrencyPage } from './SettingsCurrencyPage'
import 'modules/styles/main.scss'

export default {
  title: 'Pages/Settings/SettingsCurrencyPage',
  component: SettingsCurrencyPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withMainLayoutPage, withSettingsContext]
} as ComponentMeta<typeof SettingsCurrencyPage>

const Template: ComponentStory<typeof SettingsCurrencyPage> = (args) => <SettingsCurrencyPage {...args} />

export const Default = Template.bind({})

Default.args = {}
