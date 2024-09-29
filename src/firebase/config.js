
import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFqdb6y18Ttq5KgLtOKQHZs2kmlNEBgxw",
  authDomain: "triple3-3c106.firebaseapp.com",
  projectId: "triple3-3c106",
  storageBucket: "triple3-3c106.appspot.com",
  messagingSenderId: "594509304445",
  appId: "1:594509304445:web:b59f7d0ca4d61d340cd714"
};


firebase.initializeApp(firebaseConfig)


let db = firebase.firestore()
let timestamp = firebase.firestore.FieldValue.serverTimestamp



export { db, timestamp }