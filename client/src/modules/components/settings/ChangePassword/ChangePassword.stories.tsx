import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ChangePassword } from './ChangePassword'
import { withAlert } from 'stories/decorators'
import { failedMock, successMock } from './__mocks__'
import 'modules/styles/main.scss'

export default {
  title: 'Components/Settings/ChangePassword',
  component: ChangePassword,
  decorators: [withAlert]
} as ComponentMeta<typeof ChangePassword>

const Template: ComponentStory<typeof ChangePassword> = () => <ChangePassword />

export const Default = Template.bind({})

Default.parameters = {
  apolloClient: {
    mocks: [
      successMock,
      failedMock
    ]
  }
}
