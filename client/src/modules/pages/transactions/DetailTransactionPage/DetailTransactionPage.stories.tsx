import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { withMainLayoutPage } from 'stories/decorators'
import { DetailTransactionPage } from './DetailTransactionPage'
import 'modules/styles/main.scss'

export default {
  title: 'Pages/Transactions/DetailTransactionPage',
  component: DetailTransactionPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [withMainLayoutPage]
} as ComponentMeta<typeof DetailTransactionPage>

const PageTemplate: ComponentStory<typeof DetailTransactionPage> = () => <DetailTransactionPage />

export const Default = PageTemplate.bind({})
