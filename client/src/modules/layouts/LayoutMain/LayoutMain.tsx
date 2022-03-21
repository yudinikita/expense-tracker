import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from 'modules/components'
import { Layout } from 'modules/ui'

export const LayoutMain: React.FC = () => {
  return (
    <Layout
      header={<Header />}
      footer={<Footer />}
    >
      <Outlet />
    </Layout>
  )
}
