import firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '../credentials/client'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const auth = firebase.auth()

export { auth }
