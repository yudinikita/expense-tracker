import React from 'react'
import { AbilityDescription } from '../AbilityDescription'
import iconStar from '../../assets/welcome/star.svg'
import iconFound from '../../assets/welcome/found.svg'
import iconComp from '../../assets/welcome/components.svg'
import s from './AbilitiesDescription.module.scss'

export const AbilitiesDescription = () => (
  <div className={s.container}>
    <AbilityDescription
      title='Getting started'
      imageSrc={iconStar}
      linkHref='https://github.com/nblackninja/expense-tracker#readme'
    >
      Instructions and welcome to the Denezhki design system
    </AbilityDescription>

    <AbilityDescription
      title='Foundations'
      imageSrc={iconFound}
      linkHref='?path=/story/design-system-general-button'
    >
      All information about colors, typography, spacing, and icons
    </AbilityDescription>

    <AbilityDescription
      title='Components'
      imageSrc={iconComp}
      linkHref='?path=/story/components-general-header'
    >
      All the information and guidelines you’ll ever need on each component
    </AbilityDescription>
  </div>
)
