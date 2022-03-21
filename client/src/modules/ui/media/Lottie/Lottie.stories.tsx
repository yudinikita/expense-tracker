import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Lottie } from './Lottie'
import animationData from 'modules/assets/animation/handShake.json'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Media/Lottie',
  component: Lottie,
  argTypes: {
    animationData: { control: false },
    loop: { control: false },
    renderer: { control: false },
    rendererSettings: { control: false },
    play: { control: false },
    goTo: { control: false },
    direction: { control: false },
    segments: { control: false },
    onComplete: { control: false },
    onLoopComplete: { control: false },
    onEnterFrame: { control: false },
    onSegmentStart: { control: false },
    path: { control: false },
    style: { control: false }
  }
} as ComponentMeta<typeof Lottie>

const Template: ComponentStory<typeof Lottie> = (args) => <Lottie {...args} />

export const Default = Template.bind({})

Default.args = {
  style: {
    width: '150px',
  },
  play: true,
  animationData: animationData
}
