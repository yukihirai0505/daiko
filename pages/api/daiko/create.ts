import { connectDB } from '../../../src/datastore/mongodb'
import { createNewDaiko } from '../../../src/datastore/models/Daiko'
import fetch from 'isomorphic-unfetch'
import * as admin from 'firebase-admin'
import ServiceAccount from '../../../src/credentials/server'
import { getTwitterUserInfo } from '../../../src/utils/twitter'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(ServiceAccount),
    databaseURL: 'https://yabaiwebyasan-auth.firebaseio.com',
  })
}

export default async (req, res) => {
  if (req.method === 'POST') {
    const { title, body, place } = req.body

    const authorization = req.headers['authorization']
    const idToken = authorization.split(' ')[1]
    const decodedToken = await admin.auth().verifyIdToken(idToken)
    const uid = decodedToken.uid
    const userInfo = await admin.auth().getUser(uid)
    if (userInfo) {
      const twitterId = userInfo.providerData[0].uid
      const twitterUserInfo = await getTwitterUserInfo(twitterId)
      const twitterScreenName = twitterUserInfo.screen_name
      if (twitterScreenName) {
        const imageResponse = await fetch(
          'https://image-by-text-api.now.sh/api/upload.js',
          {
            method: 'post',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
          }
        )
        const { imageUrl } = await imageResponse.json()
        await connectDB()
        const id = await createNewDaiko({ uid, twitterScreenName, title, body, place, imageUrl })
        return res.json({ id })
      } else {
        return res.json({ message: 'cannot get twitter user info' })
      }
    }
  }
  return res.json({ message: 'no supoprt endpoint' })
}
