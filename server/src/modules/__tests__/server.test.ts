import buildApp from '../app.js'
import { FastifyInstance } from 'fastify'
import whitelist from '../config/cors/whitelist.js'

describe('Server:', () => {

  let app: FastifyInstance
  const allowOrigin: string = whitelist[0]!

  beforeAll(async () => {
    app = await buildApp({})
  })

  afterAll(async () => {
    await app.close()
  })

  it('should return status code 200 when url is graphql', async () => {
    const response = await app.inject({ url: '/graphql', headers: { origin: allowOrigin } })

    expect(response.statusCode).toBe(200)
  })

})
