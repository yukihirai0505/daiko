import firebase from 'firebase/app'
import { auth } from './firebase'

// Sign In
export const twitterSignIn = async () => {
  const user = auth.currentUser
  if (!user) {
    const provider = new firebase.auth.TwitterAuthProvider()
    await auth.signInWithPopup(provider)
  }
}

// Sign out
export const doSignOut = () => auth.signOut()
