import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { CallableContext } from 'firebase-functions/lib/providers/https'
import * as Slack from 'fire-slack'

interface ContactRequest {
  email: string
  text: string
}

export const onCalledContact = functions.https.onCall(async (data, context) => {
  try {
    return saveContact(data, context)
  } catch (error) {
    console.error(error)
    throw error
  }
})

const saveContact = async (data: ContactRequest, context: CallableContext) => {
  console.log('data', data)

  try {
    const db = admin.firestore().collection('contact').doc()
    Slack.send({ webhook: { text: `${data.email} \n ${data.text}`} })
    return await db.set({
      email: data.email,
      text: data.text,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
  } catch (e) {
    console.error(e)
    throw new functions.https.HttpsError('internal', 'failed to send contact message.')
  }
}
