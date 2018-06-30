import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

var serviceAccount = require('./adminsdk.json')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const next = require('next')

var dev = process.env.NODE_ENV !== 'production'
var app = next({ dev, conf: { distDir: '.next' } })
var handle = app.getRequestHandler()

exports.next = functions.https.onRequest((req, res) => {
  return app.prepare().then(() => handle(req, res))
})
