import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AnalyticsItem } from './AnalyticsItem'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Analytics/AnalyticsItem',
  component: AnalyticsItem
} as ComponentMeta<typeof AnalyticsItem>

const Template: ComponentStory<typeof AnalyticsItem> = (args) => <AnalyticsItem {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Title',
  percent: 15,
  amount: 123
}
