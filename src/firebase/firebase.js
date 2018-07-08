import firebase from 'firebase/app'

const config = {
  apiKey: 'AIzaSyCMUn4IB2YjrwCoFezVtcQOrztKS_ACZLs',
  authDomain: 'voltaje101-fd539.firebaseapp.com',
  databaseURL: 'https://voltaje101-fd539.firebaseio.com',
  projectId: 'voltaje101-fd539',
  storageBucket: 'voltaje101-fd539.appspot.com',
  messagingSenderId: '604482000340'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const auth = firebase.auth()

export {
  auth
}