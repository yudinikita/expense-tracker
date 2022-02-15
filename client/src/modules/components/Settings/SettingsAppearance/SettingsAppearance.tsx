import React, { ChangeEventHandler } from 'react'
import { themeList } from '../../../data'
import { useSettings } from '../../../hooks'
import { InnerNavigate } from '../..'
import styles from './SettingsAppearance.module.scss'
import InlineSVG from 'react-inlinesvg'

export const SettingsAppearance: React.FC = () => {
  const { settings, saveSettings } = useSettings()
  const currentTheme = settings?.theme || 'light'

  const handleChangeTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    const selectedTheme = e.target.value
    saveSettings({ ...settings, theme: selectedTheme })
  }

  return (
    <>
      <InnerNavigate title='Внешний вид' />
      <h3>Темы</h3>

      <ul className={styles.radios}>
        {themeList.map(theme => (
          <li key={theme?.id}>
            <label
              htmlFor={theme?.value}
              className={styles.radio}
            >
              <InlineSVG
                className={styles.iconTheme}
                src={`/images/icons/${theme.icon}.svg`}
              />
              <span className={styles.title}>{theme?.title}</span>
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
          </li>
        ))}
      </ul>
    </>
  )
}
