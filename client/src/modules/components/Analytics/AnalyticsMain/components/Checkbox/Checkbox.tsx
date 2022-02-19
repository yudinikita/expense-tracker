import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styles from '../../AnalyticsMain.module.scss'
import { useTranslation } from 'react-i18next'

const propTypes = {
  handleCheckboxClick: PropTypes.func.isRequired
}

export const Checkbox = ({ handleCheckboxClick }: InferProps<typeof propTypes>) => {
  const { t } = useTranslation()

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
          <label htmlFor='balance'>{t('analytics.category.balance')}</label>
        </div>

        <div className='checkbox'>
          <input
            type='radio'
            name='typeAnalytics'
            id='expense'
            value='expense'
            onChange={handleCheckboxClick}
          />
          <label htmlFor='expense'>{t('analytics.category.expense')}</label>
        </div>

        <div className='checkbox'>
          <input
            type='radio'
            name='typeAnalytics'
            id='income'
            value='income'
            onChange={handleCheckboxClick}
          />
          <label htmlFor='income'>{t('analytics.category.income')}</label>
        </div>
      </div>
    </div>
  )
}

Checkbox.propTypes = propTypes
