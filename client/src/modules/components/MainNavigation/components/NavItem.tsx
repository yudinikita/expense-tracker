import React from 'react'
import { NavLink } from 'react-router-dom'
import InlineSVG from 'react-inlinesvg'
import styles from './NavItem.module.scss'
import { MainLink } from '../../../data'
import { useTranslation } from 'react-i18next'

const pathIcon = '/images/icons/nav'

const classNameLink = ({ isActive }: { isActive: boolean }) => styles.link + (isActive ? ` ${styles.activeLink}` : '')

interface Props {
  link: MainLink
}

export const NavItem: React.FC<Props> = ({ link }) => {
  const { t } = useTranslation()

  return (
    <NavLink
      to={`/${link.to}`}
      title={t(`navigation.list.${link.id}`)}
      className={classNameLink}
      end
    >
      <InlineSVG
        className={styles.icon}
        src={`${pathIcon}/${link.iconName}.svg`}
        loader={<p>{link.loader}</p>}
      />
    </NavLink>
  )
}
