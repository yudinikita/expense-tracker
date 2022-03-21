import React, { useContext } from 'react'
import { useFormDeleteReplace } from './hooks'
import { ModalDeleteContext } from '../../context'
import { useTranslation } from 'react-i18next'
import { Button, Select, Space, Typography } from 'modules/ui'
import { Category } from 'modules/graphql'

export const FormDeleteReplace = () => {
  const { t } = useTranslation()
  const { selectedCategory } = useContext(ModalDeleteContext)

  const {
    categories,
    onReplaceSelect,
    clickDeleteReplace,
    loading
  } = useFormDeleteReplace()

  return (
    <Space
      direction='vertical'
      size={15}
      block
      blockItem
    >
      <Typography variant='text' fontSize={16}>
        {t('categories.modaldelete.desc.replace')}
      </Typography>

      <Select
        label={t('categories.input')}
        placeholder={t('categories.select')}
        onChange={onReplaceSelect}
        disabled={loading}
      >
        {renderCategoriesOptions(categories as [Category], selectedCategory)}
      </Select>

      <Button
        onClick={clickDeleteReplace}
        disabled={loading}
      >
        {t('categories.modaldelete.btn.replace')}
      </Button>
    </Space>
  )
}

const renderCategoriesOptions = (categories?: [Category], selectedCategory?: Category) => (
  categories
    ? <>
      {categories
        .filter(category => category?.title !== selectedCategory?.title)
        .map(category => (
          <option
            key={category?.id}
            value={category?.id}
          >
            {category?.title}
          </option>
        ))}
    </>
    : null
)
