import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Link } from './Link'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/General/Link',
  component: Link,
  argTypes: {
    onClick: { control: false }
  }
} as ComponentMeta<typeof Link>

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />

export const Default = Template.bind({})

Default.args = {
  href: '#',
  children: 'Read more'
}
