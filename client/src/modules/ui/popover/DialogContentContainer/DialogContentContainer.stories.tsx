import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { DialogContentContainer } from './DialogContentContainer'
import { Button, Typography } from 'modules/ui'
import 'modules/styles/main.scss'

export default {
  title: 'Design System/Popover/DialogContentContainer',
  component: DialogContentContainer,
  argTypes: {
    children: { control: false },
    style: { control: false }
  }
} as ComponentMeta<typeof DialogContentContainer>

const Template: ComponentStory<typeof DialogContentContainer> = (args) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <DialogContentContainer {...args} isOpen={modalIsOpen} onRequestClose={closeModal} />
    </>
  )
}

export const Default = Template.bind({})

const DialogContentContainerExample = () => (
  <div style={{ padding: 'var(space-xxl)' }}>
    <Typography>I could be anything when i grow up</Typography>
  </div>
)

Default.args = {
  children: <DialogContentContainerExample />,
  style: {
    overlay: {
      position: 'relative'
    },
    content: {
      position: 'relative'
    }
  }
}
