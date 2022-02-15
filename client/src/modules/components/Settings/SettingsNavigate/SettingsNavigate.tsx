import React from 'react'
import { settingsLinks } from '../../../data'
import { SettingsNavigateItem } from './components/SettingsNavigateItem'
import styles from './SettingsNavigate.module.scss'

export const SettingsNavigate: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className='list-reset'>
        {settingsLinks.map(link => (
          <li key={link.id}>
            <SettingsNavigateItem link={link} />
          </li>
        ))}
      </ul>
    </div>
  )
}
