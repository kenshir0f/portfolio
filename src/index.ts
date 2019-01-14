import * as admin from 'firebase-admin'
import * as ssr from './functions/ssr'
import * as contact from './functions/contact'

admin.initializeApp()

// ----------------------------------
// ServerSideRendering for React on Next.js
export const next = ssr.nextRequest

export const portfolio = {
  contact: contact.onCalledContact
}
