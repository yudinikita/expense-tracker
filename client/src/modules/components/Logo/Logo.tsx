import React from 'react'
import SVG from 'react-inlinesvg'
import { useTranslation } from 'react-i18next'

const srcLogo = '/images/logo.svg'

export const Logo: React.FC<React.SVGProps<SVG>> = (props) => {
  const { t } = useTranslation()
  return (
    // @ts-expect-error
    <SVG
      src={srcLogo}
      title={t('logo.title')}
      loader={<h2>Д</h2>}
      cacheRequests
      {...props}
    />
  )
}
