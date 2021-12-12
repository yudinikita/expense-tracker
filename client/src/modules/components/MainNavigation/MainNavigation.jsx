import React from 'react'
import { mainLinks } from '../../data'
import { NavItem } from './components/NavItem'
import styles from './MainNavigation.module.scss'

export const MainNavigation = () => {

  return (
    <div className={styles.mainNavigation}>
      <nav>
        <ul className={styles.list}>
          {mainLinks.map(link => (
            <li key={link.id}>
              <NavItem link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
