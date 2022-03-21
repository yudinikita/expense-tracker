import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Price } from './Price'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Data Display/Price',
  component: Price
} as ComponentMeta<typeof Price>

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />

export const Default = Template.bind({})

Default.args = {}
