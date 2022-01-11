import React from 'react'
import { themeList } from '../../../data'
import { useSettings } from '../../../hooks'
import { InnerNavigate } from '../..'
import styles from './SettingsAppearance.module.scss'

export const SettingsAppearance = () => {
  const { settings, saveSettings } = useSettings()
  const currentTheme = settings?.theme || 'light'

  const handleChangeTheme = (e) => {
    const theme = e.target.value
    saveSettings({ ...settings, theme })
  }

  return (
    <>
      <InnerNavigate title='Внешний вид' />
      <h3>Темы</h3>

      <div className={styles.radios}>
        {themeList.map((theme) => (
          <label
            htmlFor={theme?.value}
            key={theme?.id}
            className={styles.radio}
          >
            {theme?.title}
            <input
              type='radio'
              id={theme?.value}
              name='theme'
              value={theme?.value}
              checked={currentTheme === theme?.value}
              onChange={handleChangeTheme}
            />
            <span className={styles.checkmark} />
          </label>
        ))}
      </div>
    </>
  )
}
