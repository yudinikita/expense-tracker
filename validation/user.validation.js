const Joi = require('joi')

module.exports = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
    .messages({
      'string.empty': `Email не должен быть пустым`,
      'string.email': `Введен некорректный email`,
      'any.required': `Email обязательное поле`,
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.empty': `Пароль не должен быть пустым`,
      'string.min': `Пароль должен содержать минимум {#limit} символа`,
      'any.required': `Пароль обязательное поле`,
      'any.ref': `Пароли должны совпадать`,
    })
})
