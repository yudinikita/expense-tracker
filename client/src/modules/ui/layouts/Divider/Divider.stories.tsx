import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Space, Typography } from 'modules/ui'
import { Divider } from './Divider'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Layout/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => (
  <div>
    <Typography variant='text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </Typography>
    <Divider {...args} />
    <Typography variant='text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </Typography>
  </div>
)

export const Default = Template.bind({})

Default.args = {}

const TemplateVariants: ComponentStory<typeof Divider> = () => (
  <div>
    <Typography variant='text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </Typography>
    <Divider variant='solid' />
    <Typography variant='text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </Typography>
    <Divider variant='dashed' />
    <Typography variant='text'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt
      a te dicta? Refert tamen, quo modo.
    </Typography>
  </div>
)

export const DividerVariants = TemplateVariants.bind({})

const TemplateTypes: ComponentStory<typeof Divider> = () => (
  <Space size={5}>
    <Typography variant='text'>Text</Typography>
    <Divider variant='solid' type='vertical' />
    <Typography variant='link'>Link</Typography>
    <Divider variant='dashed' type='vertical' />
    <Typography variant='link'>Link</Typography>
  </Space>
)

export const DividerTypes = TemplateTypes.bind({})
