import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import SVG from 'react-inlinesvg'
import { Input } from './Input'
import 'modules/styles/main.scss'

const iconArrowLeft = <SVG src='/images/icons/arrow-left.svg' />

export default {
  title: 'Design System/Inputs/Input',
  component: Input,
  argTypes: {
    onClick: { action: true },
    onChange: { action: true },
    type: {
      options: [
        'number',
        'text',
        'tel',
        'email',
        'password'
      ]
    },
    prefix: {
      control: {
        type: 'text'
      }
    },
    suffix: {
      control: {
        type: 'text'
      }
    }
  }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input  {...args} />

export const Default = Template.bind({})

Default.args = {
  label: 'Hello!'
}

export const WithPrefix = Template.bind({})

WithPrefix.args = {
  label: 'Name?',
  placeholder: 'John!',
  prefix: iconArrowLeft
}

export const WithSuffix = Template.bind({})

WithSuffix.args = {
  label: 'Name?',
  placeholder: 'John!',
  suffix: iconArrowLeft
}

export const WithPrefixAndSuffix = Template.bind({})

WithPrefixAndSuffix.args = {
  prefix: iconArrowLeft,
  suffix: iconArrowLeft
}

export const Password = Template.bind({})

Password.args = {
  label: 'Password',
  type: 'password'
}

export const InvalidState = Template.bind({})

InvalidState.args = {
  label: 'Password',
  type: 'password',
  invalid: true
}
