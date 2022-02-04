import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'

let mongod: MongoMemoryServer

export const connectTestDb = async (): Promise<void> => {
  mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()
  await mongoose.connect(uri, {
    ignoreUndefined: true
  })
}

export const disconnectTestDb = async (): Promise<void> => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongod.stop()
}

export const clearTestDb = async (): Promise<void> => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    if (Object.prototype.hasOwnProperty.call(collections, key)) {
      const collection = collections[key]
      if (collection !== null && collection !== undefined) {
        await collection.deleteMany({})
      }
    }
  }
}
