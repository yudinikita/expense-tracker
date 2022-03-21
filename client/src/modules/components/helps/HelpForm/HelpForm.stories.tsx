import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withAlert } from 'stories/decorators'
import { HelpForm } from './HelpForm'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Settings/HelpForm',
  component: HelpForm,
  decorators: [withAlert]
} as ComponentMeta<typeof HelpForm>

const Template: ComponentStory<typeof HelpForm> = () => <HelpForm />

export const Default = Template.bind({})
