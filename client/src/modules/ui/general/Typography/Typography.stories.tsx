import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Space } from 'modules/ui'
import { Typography } from './Typography'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/General/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Default text'
}

const TemplateVariants: ComponentStory<typeof Typography> = () => {
  return (
    <Space direction='vertical'>
      <Typography variant='title'>Title</Typography>
      <Typography variant='h1'>h1. Main heading</Typography>
      <Typography variant='h2'>h2. Secondary heading</Typography>
      <Typography variant='h3'>h3. Tertiary heading</Typography>
      <Typography variant='h4'>h4. Fourth heading</Typography>
      <Typography variant='h5'>h5. Fourth heading</Typography>
      <Typography variant='h6'>h6. Fifth heading</Typography>
      <Typography variant='p'>Paragraph text</Typography>
      <Typography variant='text'>General text</Typography>
      <Typography variant='link'>Link text</Typography>
    </Space>
  )
}

export const TextVariants = TemplateVariants.bind({})

TextVariants.args = {}

const TemplateTypes: ComponentStory<typeof Typography> = () => {
  return (
    <Space direction='vertical'>
      <Typography type='default'>Default type</Typography>
      <Typography type='secondary'>Secondary type</Typography>
      <Typography type='success'>Success type</Typography>
      <Typography type='warning'>Warning type</Typography>
      <Typography type='disabled'>Disabled type</Typography>
      <Typography type='underline'>Underline type</Typography>
      <Typography type='delete'>Delete type</Typography>
      <Typography type='strong'>Strong type</Typography>
      <Typography type='italic'>Italic type</Typography>
    </Space>
  )
}

export const TextTypes = TemplateTypes.bind({})

TextTypes.args = {}
