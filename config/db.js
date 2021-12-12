const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log(`Connected to MongoDB: ${mongoose.connection.host}`.cyan.bold)
  } catch (e) {
    console.log(`Error connect to MongoDB: ${e.message}`.red)
    process.exit(1)
  }
}

module.exports = connectDB
