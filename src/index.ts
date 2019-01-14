import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'
import * as ssr from './functions/ssr'
import * as contact from './functions/contact'
import * as Slack from 'fire-slack'

admin.initializeApp()

Slack.initialize(
  functions.config().slack.url,
  {
    channel: 'contact',
    iconEmoji: ':mail:',
    username: 'portfolio'
  }
)

// ----------------------------------
// ServerSideRendering for React on Next.js
export const next = ssr.nextRequest

export const portfolio = {
  contact: contact.onCalledContact
}
