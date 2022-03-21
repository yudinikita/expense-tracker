const constants = {
  DEFAULT_NODE_ENV: 'development',
  SERVER: {
    DEFAULT_PORT: 5000,
    DEFAULT_HOST: 'localhost'
  },
  JWT: {
    EXPIRES_IN: 1000 * 60 * 60 * 24 * 30,
    TOKEN_TYPE: 'Bearer'
  },
  AUTH: {
    SALT_ROUNDS: 10,
    ACTIVATION_CODE: {
      LENGTH: 3,
      MIN: 10,
      MAX: 1000000
    }
  },
  MAIL: {
    SUBJECT: 'Код активации | Денежки'
  },
  GRAPHQL: {
    MESSAGE: {
      RESOLVER_ERROR: 'Oops, there is an error, please try again later.',
      AUTH_ERROR: 'validations.common.auth_error',
      FORBIDDEN_ERROR: 'validations.common.forbidden_error',
      ACTIVATION_ERROR: 'validations.common.activation_error',
      ACTIVATION_CODE_ERROR: 'validations.common.activation_error',
      USER_EXISTS: 'validations.login.user_exists',
      USER_NOT_EXISTS: 'validations.login.user_not_exists',
      LOGIN_ERROR: 'validations.login.error'
    }
  }
}

export default constants
