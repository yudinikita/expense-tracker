import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withSettingsContext } from 'stories/decorators'
import { AppearanceList } from './AppearanceList'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Settings/AppearanceList',
  component: AppearanceList,
  decorators: [withSettingsContext]
} as ComponentMeta<typeof AppearanceList>

const Template: ComponentStory<typeof AppearanceList> = () => <AppearanceList />

export const Default = Template.bind({})
