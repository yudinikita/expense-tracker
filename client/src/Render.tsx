import React, { Suspense } from 'react'
import { MyLoader } from './modules/components'
import { App } from './App'

export const Render: React.FC = () => {
  return (
    <React.StrictMode>
      <Suspense fallback={<MyLoader />}>
        <App />
      </Suspense>
    </React.StrictMode>
  )
}
