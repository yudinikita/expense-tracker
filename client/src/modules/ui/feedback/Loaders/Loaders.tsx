import React from 'react'
import { LoaderCircle } from './list/LoaderCircle'
import { LoaderLogo } from './list/LoaderLogo'
import s from './Loaders.module.scss'

type LoadersVariants = 'circular' | 'logo'

interface LoadersProps {
  /**
   * Renders one of the selected visual styles
   *
   * @default circular
   */
  variant?: LoadersVariants
}

export const Loaders: React.FC<LoadersProps> = ({
  variant = 'circular',
  ...otherProps
}) => {

  const props = {
    ...otherProps
  }

  const renderLoader = (loader?: React.ReactNode) => (
    <div
      {...props}
      role='progressbar'
      className={s.loader}
    >
      {loader ?? 'Loading...'}
    </div>
  )

  switch (variant) {
    case 'logo':
      return renderLoader(<LoaderLogo />)
    case 'circular':
    default:
      return renderLoader(<LoaderCircle />)
  }
}
