import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withSettingsContext } from 'stories/decorators'
import { LanguagesList } from './LanguagesList'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Settings/LanguagesList',
  component: LanguagesList,
  decorators: [withSettingsContext]
} as ComponentMeta<typeof LanguagesList>

const Template: ComponentStory<typeof LanguagesList> = () => <LanguagesList />

export const Default = Template.bind({})
