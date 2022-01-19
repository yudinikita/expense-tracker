const fastifyOptions = {
  logger: {
    prettyPrint: {
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname,reqId,responseTime,req,res',
      messageFormat: '[{reqId}] {msg} {req.method} {req.url} {res.statusCode}'
    }
  }
}

export default fastifyOptions
