import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Layout } from 'modules/ui'
import { Header } from './Header'
import 'modules/styles/main.scss'

export default {
  title: 'Components/General/Header',
  component: Header
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = (args) => (
  <Layout
    header={<Header {...args} />}
    style={{ minHeight: 'fit-content' }}
  />
)

export const Default = Template.bind({})

Default.args = {}
