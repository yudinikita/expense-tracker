import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 0,
    borderRadius: '10px',
    padding: '30px',
    maxWidth: '315px'
  }
}

export const MyModal = ({
  isOpen,
  onRequestClose,
  className,
  children
}) => {
  return (
    <Modal
      className={className}
      style={modalStyles}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  )
}

MyModal.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
}

