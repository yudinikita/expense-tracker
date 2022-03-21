import React from 'react'
import { Layout } from 'modules/ui'
import { Footer, Header } from 'modules/components'

export const withMainLayoutPage = (storyFn: Function) => (
  <Layout
    header={<Header />}
    footer={<Footer />}
  >
    {storyFn()}
  </Layout>
)
