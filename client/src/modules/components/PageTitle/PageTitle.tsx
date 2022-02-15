import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import styles from './PageTitle.module.scss'

const propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object.isRequired
}

export const PageTitle = ({ title, icon }: InferProps<typeof propTypes>) => {
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

PageTitle.propTypes = propTypes
