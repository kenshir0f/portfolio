import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { CallableContext } from 'firebase-functions/lib/providers/https'

interface ContactRequest {
  text: string
  email: string
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
    return await db.set({
      name: this.state.data.name,
      email: this.state.data.email,
      title: this.state.data.title,
      content: this.state.data.content,
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
  } catch (e) {
    console.error(e)
    throw new functions.https.HttpsError('internal', 'failed to send contact message.')
  }
}
