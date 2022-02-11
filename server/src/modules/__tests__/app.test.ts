import buildApp from '../app'
import whitelist from '../config/cors/whitelist.js'
import { FastifyInstance } from 'fastify'

describe('App', () => {

  let app: FastifyInstance
  const allowOrigin: string = whitelist[0]!

  beforeAll(async () => {
    app = await buildApp({})
  })

  afterAll(async () => {
    await app.close()
  })

  it('should return status code 200 when app is ready', async () => {
    const response = await app.inject({ url: '/', headers: { origin: allowOrigin } })

    expect(response.statusCode).toBe(200)
  })

})
