import { useAlert } from 'react-alert'
import { CategoryInput, useCreateCategoryMutation } from 'modules/graphql'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { CATEGORY_MAX_LENGTH, CATEGORY_MIN_LENGTH } from 'modules/constants'

const initialValues: CategoryInput = {
  title: ''
}

export const useCategoriesForm = () => {
  const { t } = useTranslation()
  const alert = useAlert()

  const validationSchema: yup.SchemaOf<CategoryInput> = yup.object({
    title: yup.string().min(CATEGORY_MIN_LENGTH).max(CATEGORY_MAX_LENGTH).required()
  })

  const [createCategory] = useCreateCategoryMutation({
    refetchQueries: ['categories']
  })

  const onSubmit = async (values: CategoryInput) => {
    await createCategory({
      variables: {
        input: {
          ...values
        }
      }
    })

    alert.success(t('alert.category.add.success'))
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit
  })

  const invalid = {
    title: formik.touched.title && Boolean(formik.errors.title)
  }

  const errors = {
    title: invalid.title ? formik.errors.title : ''
  }

  return {
    formik,
    errors,
    invalid
  }
}
