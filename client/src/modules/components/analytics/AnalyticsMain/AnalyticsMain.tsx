import React from 'react'
import { useTranslation } from 'react-i18next'
import { DateSwitcher, Divider, Radio, Space } from 'modules/ui'
import { useDateSwitcher } from 'modules/hooks'
import { AnalyticsContainer } from './components/AnalyticsContainer'
import { useAnalyticsContainer } from './hooks/useAnalyticsContainer'

export const AnalyticsMain = () => {
  const { t } = useTranslation()
  const { date, onChange } = useDateSwitcher()
  const { typeAnalytic, handleChangeChecked } = useAnalyticsContainer()

  return (
    <div>
      <Space
        justify='between'
        block
      >
        <Radio
          id='balance'
          name='typeAnalytics'
          value='balance'
          checked={typeAnalytic === 'balance'}
          onChange={handleChangeChecked}
        >
          {t('analytics.category.balance')}
        </Radio>

        <Radio
          id='expense'
          name='typeAnalytics'
          value='expense'
          checked={typeAnalytic === 'expense'}
          onChange={handleChangeChecked}
        >
          {t('analytics.category.expense')}
        </Radio>

        <Radio
          id='income'
          name='typeAnalytics'
          value='income'
          checked={typeAnalytic === 'income'}
          onChange={handleChangeChecked}
        >
          {t('analytics.category.income')}
        </Radio>
      </Space>

      <Divider space={[25, 0]} />

      <DateSwitcher onChange={onChange} />

      <Divider space={[0, 25]} />

      <AnalyticsContainer
        typeAnalytic={typeAnalytic}
        date={date}
      />
    </div>
  )
}
