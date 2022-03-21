import Joi from 'joi'
import { UserRegistrationInput } from '../../../graphql/__generated__/graphql.types.gen.js'

export const inputValidation = Joi.object<UserRegistrationInput>({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .messages({
      'string.empty': 'validations.common.email',
      'string.email': 'validations.common.email',
      'any.required': 'validations.common.required'
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.empty': 'validations.common.password',
      'string.min': 'validations.common.password',
      'any.required': 'validations.common.required'
    })
})
