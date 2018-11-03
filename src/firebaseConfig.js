import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAEB6NQwgIkGcrbcexoYUn-StkMaXeZw48",
  authDomain: "pizza-2a474.firebaseapp.com",
  databaseURL: "https://pizza-2a474.firebaseio.com",
  projectId: "pizza-2a474",
  storageBucket: "",
  messagingSenderId: "1084049540107"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.database()

// creates menu reference on firebase
export const dbMenuRef = db.ref('menu')

export const dbOrdersRef = db.ref('orders')
