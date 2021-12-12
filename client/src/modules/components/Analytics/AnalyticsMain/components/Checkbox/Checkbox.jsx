import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../AnalyticsMain.module.scss'

const propTypes = {
  handleCheckboxClick: PropTypes.func,
}

export const Checkbox = ({ handleCheckboxClick }) => {
  return (
    <div className={styles.tabs}>
      <div className={'groupCheckbox ' + styles.tabsGroup}>
        <div className='checkbox'>
          <input
            type='radio'
            name='typeAnalytics'
            id='balance'
            value='balance'
            defaultChecked
            onChange={handleCheckboxClick}
          />
          <label htmlFor='balance'>Баланс</label>
        </div>

        <div className='checkbox'>
          <input
            type='radio'
            name='typeAnalytics'
            id='expense'
            value='expense'
            onChange={handleCheckboxClick}
          />
          <label htmlFor='expense'>Расход</label>
        </div>

        <div className='checkbox'>
          <input
            type='radio'
            name='typeAnalytics'
            id='income'
            value='income'
            onChange={handleCheckboxClick}
          />
          <label htmlFor='income'>Доход</label>
        </div>
      </div>
    </div>
  )
}

Checkbox.propTypes = propTypes
