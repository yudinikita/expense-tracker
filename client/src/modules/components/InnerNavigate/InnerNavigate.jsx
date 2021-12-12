import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import styles from './InnerNavigate.module.scss'

export const InnerNavigate = ({
  title,
  linkPath,
  haveBtn = true,
  haveTitle = true
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (linkPath) return navigate(linkPath)
    return navigate(-1)
  }

  const GoButton = () => (
    <button onClick={handleClick} className={`${styles.button}`} title='Назад'>
      <SVG src='/images/icons/arrow-left.svg' loader='<' />
    </button>
  )

  return (
    <div className={styles.navigate}>
      {haveBtn && <GoButton />}
      {haveTitle && <h2>{title}</h2>}
    </div>
  )
}

InnerNavigate.propTypes = {
  title: PropTypes.string,
  linkPath: PropTypes.string,
  haveBtn: PropTypes.bool,
  haveTitle: PropTypes.bool
}
