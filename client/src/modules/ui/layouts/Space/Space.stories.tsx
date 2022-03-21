import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Typography } from 'modules/ui'
import { Space } from './Space'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Layout/Space',
  component: Space,
} as ComponentMeta<typeof Space>

const Template: ComponentStory<typeof Space> = (args) => (
  <Space {...args}>
    Text
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
  </Space>
)

export const Default = Template.bind({})

Default.args = {}

const TemplateVertical: ComponentStory<typeof Space> = (args) => (
  <Space {...args}>
    Text
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
  </Space>
)

export const Vertical = TemplateVertical.bind({})

Vertical.args = {
  direction: 'vertical'
}

const TemplateCustomSize: ComponentStory<typeof Space> = (args) => (
  <Space {...args}>
    Text
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
  </Space>
)

export const CustomSize = TemplateCustomSize.bind({})

CustomSize.args = {
  size: 50
}

const TemplateWrap: ComponentStory<typeof Space> = (args) => (
  <Space {...args}>
    Text
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
    <Typography variant='link'>Link</Typography>
  </Space>
)

export const Wrap = TemplateWrap.bind({})

Wrap.args = {
  size: [10, 20],
  wrap: true
}
