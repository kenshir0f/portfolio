import * as functions from 'firebase-functions'
import * as next from 'next'

var dev = process.env.NODE_ENV !== 'production'
var app = next({ dev, conf: { distDir: '.next' } })
var handle = app.getRequestHandler()

export const nextRequest = functions.https.onRequest((req, res) => {
  console.log(req.path)
  return app.prepare().then(() => handle(req, res))
})
