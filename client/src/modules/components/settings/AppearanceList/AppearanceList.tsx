import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Lottie, Space } from 'modules/ui'
import { useSettings } from 'modules/hooks'
import { defaultSettings } from 'modules/context/settings/defaultSettings'

import lightData from 'modules/assets/animation/light.json'
import darkData from 'modules/assets/animation/dark.json'

/**
 * List of appearances are continuous, vertical indexes of appearance
 */
export const AppearanceList: React.FC = () => {
  const { t } = useTranslation()
  const { settings, saveSettings } = useSettings()

  const handleChangeAppearance = (currencyCode: string) => {
    if (currencyCode) saveSettings({ ...settings, theme: currencyCode })
  }

  const currentAppearance = settings?.theme ?? defaultSettings.theme

  return (
    <Space direction='vertical'>
      {renderAppearanceItem(t('settings.theme.list.0'), lightData, 'light',
        currentAppearance, handleChangeAppearance)}

      {renderAppearanceItem(t('settings.theme.list.1'), darkData, 'dark',
        currentAppearance, handleChangeAppearance)}
    </Space>
  )
}

const renderAppearanceItem = (
  title: string,
  animationData: any,
  appearanceCode: string,
  currentAppearance: string,
  handleChangeAppearance: (appearanceCode: string) => void
) => {

  const before =
    <Lottie
      play
      animationData={animationData}
      style={{ width: '60px' }}
    />

  const isActive = currentAppearance === appearanceCode
  const buttonVariant = isActive ? 'primary' : 'default'

  return (
    <Button
      variant={buttonVariant}
      size='small'
      textAlign='left'
      before={before}
      onClick={() => handleChangeAppearance(appearanceCode)}
    >
      {title}
    </Button>
  )
}
