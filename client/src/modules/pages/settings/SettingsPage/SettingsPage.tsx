import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NAVIGATION } from 'modules/constants'
import { Link } from 'modules/ui'
import { ModalSignOut, NavigationBar, SettingsNavigate } from 'modules/components'
import settings from 'modules/assets/animation/settings.json'

export const SettingsPage: React.FC = () => {
  const { t } = useTranslation()
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const subtitle = (
    <Link
      variant='second'
      onClick={openModal}
      style={{ fontSize: '18px' }}
    >
      {t('user.logout.title')}
    </Link>
  )

  return (
    <>
      <NavigationBar
        title={t('settings.title')}
        titleVariant='large'
        subtitle={subtitle}
        spaceBottom={NAVIGATION.GLOBAL.SPACE.BOTTOM}
        animationData={settings}
      />

      <ModalSignOut isOpen={modalIsOpen} onRequestClose={closeModal} />

      <SettingsNavigate />
    </>
  )
}
