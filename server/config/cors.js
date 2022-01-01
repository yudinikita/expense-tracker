const whitelist = [
  'http://localhost',
  'http://localhost:3000',
  'https://expense-tracker-easy.herokuapp.com/',
  'https://studio.apollographql.com'
]

module.exports = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}
