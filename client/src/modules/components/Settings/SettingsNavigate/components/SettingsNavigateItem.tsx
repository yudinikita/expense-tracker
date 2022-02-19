import React from 'react'
import { NavLink } from 'react-router-dom'
import InlineSVG from 'react-inlinesvg'
import styles from './SettingsNavigateItem.module.scss'
import { SettingsMainLink } from '../../../../data'
import { useTranslation } from 'react-i18next'

interface Props {
  link: SettingsMainLink
}

export const SettingsNavigateItem: React.FC<Props> = ({ link }) => {
  const { t } = useTranslation()
  return (
    <NavLink
      to={`${link.to}`}
      className={styles.link}
      end
    >
      <div className={styles.titleContainer}>
        <InlineSVG
          className={styles.iconCategory}
          src={`/images/icons/settings/${link.icon}.svg`}
        />
        <span className={styles.title}>{t(`settings.list.${link.id}`)}</span>
      </div>

      <InlineSVG
        className={styles.iconGo}
        src='/images/icons/arrow-right.svg'
        loader={<p>ᐳ</p>}
      />
    </NavLink>
  )
}
