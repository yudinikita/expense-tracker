import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './LayoutAuth.module.scss'

export const LayoutAuth = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Outlet />
      </div>
    </div>
  )
}
