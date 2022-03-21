import React from 'react'
import { Icon } from 'modules/ui'
import { LogoFill } from 'modules/assets/icons'
import { useTranslation } from 'react-i18next'

/**
 * Our proud logo. There is no a in the middle.
 * Use sparingly, and make sure it has a lot of visual distinction to stand out appropriately.
 */
export const Logo: React.FC<React.SVGProps<HTMLOrSVGElement>> = (props) => {
  const { t } = useTranslation()

  return (
    <Icon
      icon={LogoFill}
      title={t('logo.title')}
      {...props}
    />
  )
}
