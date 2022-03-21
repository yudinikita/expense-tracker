import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Layout } from './Layout'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Layout/Layout',
  component: Layout,
  argTypes: {
    header: { control: false },
    children: { control: false },
    footer: { control: false },
    style: { control: false }
  }
} as ComponentMeta<typeof Layout>

const Header = () => (
  <div style={{
    textAlign: 'center',
    background: '#ffe47d',
    minHeight: '50px',
    lineHeight: '50px',
    width: '100%'
  }}>
    Header
  </div>
)

const Content = () => (
  <div style={{
    textAlign: 'center',
    background: 'var(--color-brand-yellow)',
    minHeight: '150px',
    lineHeight: '150px'
  }}>
    Content
  </div>
)

const Footer = () => (
  <div style={{
    textAlign: 'center',
    background: '#ffe47d',
    minHeight: '50px',
    lineHeight: '50px',
    width: '100%'
  }}>
    Footer
  </div>
)

const Template: ComponentStory<typeof Layout> = (args) => (<Layout {...args} />)

export const Default = Template.bind({})

Default.args = {
  style: { minHeight: 0 },
  header: <Header />,
  children: <Content />,
  footer: <Footer />
}
