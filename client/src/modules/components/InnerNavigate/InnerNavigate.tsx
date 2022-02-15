import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { useNavigate } from 'react-router-dom'
import SVG from 'react-inlinesvg'
import styles from './InnerNavigate.module.scss'

const propTypes = {
  title: PropTypes.string,
  linkPath: PropTypes.string,
  haveBtn: PropTypes.bool,
  haveTitle: PropTypes.bool
}

export const InnerNavigate = ({
  title,
  linkPath,
  haveBtn = true,
  haveTitle = true
}: InferProps<typeof propTypes>) => {
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

InnerNavigate.propTypes = propTypes
