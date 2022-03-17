// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAf2p7KOgWFjL1M53i4ne4lqNUFDoJj-X8',
  authDomain: 'insta-test-d2a00.firebaseapp.com',
  projectId: 'insta-test-d2a00',
  storageBucket: 'insta-test-d2a00.appspot.com',
  messagingSenderId: '855942811495',
  appId: '1:855942811495:web:83cc8ce69a636c907769c2',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const storage = getStorage(app)

export { app, db, storage }
