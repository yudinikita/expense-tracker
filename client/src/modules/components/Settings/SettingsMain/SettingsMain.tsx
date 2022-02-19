import React, { useState } from 'react'
import { ModalSignOut, SettingsNavigate } from '../..'
import { useTranslation } from 'react-i18next'

export const SettingsMain: React.FC = () => {
  const { t } = useTranslation()
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button onClick={openModal} className='btn-reset linkSecond'>
        {t('user.logout.title')}
      </button>

      <ModalSignOut isOpen={modalIsOpen} onRequestClose={closeModal} />

      <SettingsNavigate />
    </>
  )
}
