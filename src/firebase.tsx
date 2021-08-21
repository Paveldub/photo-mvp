import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'
import { get } from 'lodash'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD9Pwe9YgJDJMo_0oELNuVMJMWT8N3S5EA',
  authDomain: 'photo-mvp.firebaseapp.com',
  databaseURL: 'https://photo-mvp-default-rtdb.firebaseio.com',
  projectId: 'photo-mvp',
  storageBucket: 'photo-mvp.appspot.com',
  messagingSenderId: '165238381929',
  appId: '1:165238381929:web:717f119dfa031af8e271f8',
})

export const allData = []

function listAll(folder) {
  const storageRef = firebase.storage().ref()

  const listRef = storageRef.child(folder)

  listRef
    .listAll()
    .then((res) => {
      res.items.forEach((folderRef) => {
        folderRef.getDownloadURL().then((url) => {
          // console.log('getDownloadURL :' + url)
          allData.push(url)
        })
      })
    })
    .catch((e) => {
      const response = get(e, 'response', {})

      if (response.status === 404) {
        console.warn(e.message)
      }
    })
}

const db = firebaseApp.firestore()
const storage = firebase.storage()

export { storage, listAll, firebase as defaut }
export default db
