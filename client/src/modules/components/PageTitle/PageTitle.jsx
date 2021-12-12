import React from 'react'
import PropTypes from 'prop-types'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import styles from './PageTitle.module.scss'

export const PageTitle = ({ title, icon }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>

      <div className={styles.icon}>
        <Lottie
          play
          loop={false}
          animationData={icon}
          speed={1}
        />
      </div>
    </div>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object
}
