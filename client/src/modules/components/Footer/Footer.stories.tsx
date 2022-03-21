import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Footer } from './Footer'
import { Layout } from 'modules/ui'
import 'modules/styles/main.scss'

export default {
  title: 'Components/General/Footer',
  component: Footer
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => (
  <Layout
    footer={<Footer {...args} />}
    style={{ minHeight: 'fit-content' }}
  />
)

export const Default = Template.bind({})

Default.args = {}
