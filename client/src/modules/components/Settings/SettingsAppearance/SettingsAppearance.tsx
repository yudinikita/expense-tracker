import React, { ChangeEventHandler } from 'react'
import { themeList } from '../../../data'
import { useSettings } from '../../../hooks'
import styles from './SettingsAppearance.module.scss'
import InlineSVG from 'react-inlinesvg'
import { useTranslation } from 'react-i18next'

export const SettingsAppearance: React.FC = () => {
  const { t } = useTranslation()

  const { settings, saveSettings } = useSettings()

  const currentTheme = settings?.theme || 'light'

  const handleChangeTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
    const selectedTheme = e.target.value
    saveSettings({ ...settings, theme: selectedTheme })
  }

  return (
    <>
      <h3>{t('settings.theme.subtitle')}</h3>

      <ul className={styles.radios}>
        {themeList.map((theme, i) => (
          <li key={theme?.id}>
            <label
              htmlFor={theme?.value}
              className={styles.radio}
            >
              <InlineSVG
                className={styles.iconTheme}
                src={`/images/icons/${theme.icon}.svg`}
              />
              <span className={styles.title}>{t(`settings.theme.list.${i}`)}</span>
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
