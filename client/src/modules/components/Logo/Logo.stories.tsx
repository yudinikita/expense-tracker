import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Logo } from './Logo'
import 'modules/styles/main.scss'

export default {
  title: 'Components/General/Logo',
  component: Logo
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})

Default.args = {}
