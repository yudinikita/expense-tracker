import React from 'react'
import styles from './Content404Page.module.scss'

export const Content404Page = () => {
  return (
    <div>
      <video
        className={styles.video}
        width='250'
        autoPlay loop muted
      >
        <source src='/images/lazyCat.mp4' type='video/mp4' />
      </video>
    </div>
  )
}
