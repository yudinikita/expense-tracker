import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { MyModal } from '../..'

export const ModalSignOut = ({
  isOpen,
  onRequestClose
}) => {
  const navigate = useNavigate()
  const handleClickLogout = () => navigate('/logout')

  return (
    <MyModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div>
        <h2>Выход из аккаунта</h2>
        <p>Вы уверены, что хотите выйти из аккаунта?</p>
        <button
          type='button'
          onClick={handleClickLogout}
          className='mainButton'
        >
          Выйти
        </button>
        <br /><br />
        <button
          type='button'
          onClick={onRequestClose}
          className='secondaryButton'
        >
          Отмена
        </button>
      </div>
    </MyModal>
  )
}

ModalSignOut.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func
}
