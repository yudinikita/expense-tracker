import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayoutPage } from 'stories/decorators'
import { TransactionPage } from './TransactionPage'
import 'modules/styles/main.scss'

export default {
  title: 'Pages/Transactions/TransactionPage',
  component: TransactionPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withMainLayoutPage]
} as ComponentMeta<typeof TransactionPage>

const PageTemplate: ComponentStory<typeof TransactionPage> = () => <TransactionPage />

export const Default = PageTemplate.bind({})
