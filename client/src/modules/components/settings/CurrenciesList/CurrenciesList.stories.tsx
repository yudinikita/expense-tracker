import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withSettingsContext } from 'stories/decorators'
import { CurrenciesList } from './CurrenciesList'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Settings/CurrenciesList',
  component: CurrenciesList,
  decorators: [withSettingsContext]
} as ComponentMeta<typeof CurrenciesList>

const Template: ComponentStory<typeof CurrenciesList> = () => <CurrenciesList />

export const Default = Template.bind({})
