const constants = {
  DEFAULT_NODE_ENV: 'development',
  SERVER: {
    DEFAULT_PORT: 5000,
    DEFAULT_HOST: 'localhost'
  },
  JWT: {
    EXPIRES_IN: 1000 * 60 * 60 * 24 * 30
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
      RESOLVER_ERROR: 'Упс, произошла ошибка.',
      AUTH_ERROR: 'Ошибка авторизации',
      FORBIDDEN_ERROR: 'Аккаунт не активирован',
      ACTIVATION_ERROR: 'Аккаунт уже активирован',
      ACTIVATION_CODE_ERROR: 'Аккаунт уже активирован',
      USER_EXISTS: 'Пользователь с таким почтовым адресом уже существует',
      LOGIN_ERROR: 'Неправильный логин или пароль'
    }
  }
}

export default constants
