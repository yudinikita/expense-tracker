import React, { useState } from 'react'
import { ModalSignOut, SettingsNavigate } from '../..'

export const SettingsMain = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return (
    <>
      <button onClick={openModal} className='btn-reset linkSecond'>
        Выйти из аккаунта
      </button>

      <ModalSignOut isOpen={modalIsOpen} onRequestClose={closeModal} />

      <SettingsNavigate />
    </>
  )
}
