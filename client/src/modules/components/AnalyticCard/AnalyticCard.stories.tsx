import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { AnalyticCard } from './AnalyticCard'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Home/AnalyticCard',
  component: AnalyticCard
} as ComponentMeta<typeof AnalyticCard>

const Template: ComponentStory<typeof AnalyticCard> = (args) => <AnalyticCard {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Title',
  subtitle: 'Subtitle',
  price: 15000,
  percent: 50
}

export const Color = Template.bind({})

Color.args = {
  title: 'Color card',
  subtitle: 'Subtitle',
  price: -5462,
  percent: 78,
  colorBg: 'rgb(239, 252, 239)',
  colorTrain: 'rgb(123, 217, 131)'
}
