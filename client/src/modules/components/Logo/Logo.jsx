import React from 'react'
import SVG from 'react-inlinesvg'

const srcLogo = '/images/logo.svg'

export const Logo = (props) => (
  <SVG
    src={srcLogo}
    title='Логотип Денежки'
    loader={<h2>Д</h2>}
    cacheRequests
    {...props}
  />
)
