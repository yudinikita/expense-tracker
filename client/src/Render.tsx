import React, { Suspense } from 'react'
import { Loaders } from 'modules/ui'
import { App } from 'App'

export const Render: React.FC = () => {
  return (
    <React.StrictMode>
      <Suspense fallback={<Loaders variant='circular' />}>
        <App />
      </Suspense>
    </React.StrictMode>
  )
}
