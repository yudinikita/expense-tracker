import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Icon, Space } from 'modules/ui'
import { Button } from './Button'
import 'modules/styles/main.scss'

const iconArrowRight = <Icon icon={'/images/icons/arrow-right.svg'} />
const iconCategories = <Icon icon={'/images/icons/settings/categories.svg'} iconSize={24} />

export default {
  title: 'Design System/General/Button',
  component: Button,
  argTypes: {
    onClick: { action: true },
    type: {
      control: {
        options: ['button', 'reset', 'submit']
      }
    },
    before: {
      control: {
        type: 'text'
      }
    },
    after: {
      control: {
        type: 'text'
      }
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Click me!'
}

export const Primary = Template.bind({})

Primary.args = {
  children: 'Click me!',
  variant: 'primary'
}

export const Outline = Template.bind({})

Outline.args = {
  children: 'Click me!',
  variant: 'outline'
}

export const Invisible = Template.bind({})

Invisible.args = {
  children: 'Click me!',
  variant: 'invisible'
}

export const WithIcon = Template.bind({})

WithIcon.args = {
  children: 'Категории',
  variant: 'default',
  block: false,
  size: 'small',
  textAlign: 'left',
  before: iconCategories,
  after: iconArrowRight
}

const TemplateListLink: ComponentStory<typeof Button> = () => (
  <Space direction='vertical' size={25}>
    <Button variant='primary' href='/'>Click me!</Button>
    <Button variant='outline' href='/'>Click me!</Button>
    <Button variant='invisible' href='/'>Click me!</Button>
  </Space>
)

export const LinkButton = TemplateListLink.bind({})

const TemplateListDisabled: ComponentStory<typeof Button> = () => (
  <Space direction='vertical' size={25}>
    <Button variant='primary' disabled={true}>Don't click me!</Button>
    <Button variant='outline' disabled={true}>Don't click me!</Button>
    <Button variant='invisible' disabled={true}>Don't click me!</Button>
  </Space>
)

export const DisabledButton = TemplateListDisabled.bind({})

const TemplateListLoading: ComponentStory<typeof Button> = () => (
  <Space direction='vertical' size={25}>
    <Button variant='primary' loading={true} size='large'>Don't click me!</Button>
    <Button variant='outline' loading={true} size='base'>Don't click me!</Button>
    <Button variant='invisible' loading={true} size='medium'>Don't click me!</Button>
    <Button variant='default' loading={true} size='small'>Don't click me!</Button>
  </Space>
)

export const LoadingButton = TemplateListLoading.bind({})

export const IconButton = Template.bind({})

IconButton.args = {
  variant: 'invisible',
  iconButton: iconCategories
}
