import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { NavigationBar } from './NavigationBar'
import handShake from 'modules/assets/animation/handShake.json'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Common/NavigationBar',
  component: NavigationBar,
  argTypes: {
    animationData: { control: false },
    subtitle: { control: 'text' }
  }
} as ComponentMeta<typeof NavigationBar>

const Template: ComponentStory<typeof NavigationBar> = (args) => <NavigationBar {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Heading',
  titleVariant: 'large',
  animationData: handShake
}

export const WithSubtitle = Template.bind({})

WithSubtitle.args = {
  title: 'Heading',
  subtitle: 'Subheading',
  titleVariant: 'large',
  animationData: handShake
}

export const WithLeftButton = Template.bind({})

WithLeftButton.args = {
  title: 'Heading',
  titleVariant: 'default',
  backButton: true
}
