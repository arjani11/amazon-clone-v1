import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBnJRiSRMwJMVhgn50RwgIYV-brWTx0Y68",
  authDomain: "app-6b218.firebaseapp.com",
  projectId: "app-6b218",
  storageBucket: "app-6b218.appspot.com",
  messagingSenderId: "299039914648",
  appId: "1:299039914648:web:de557fd630be265944eeed",
  measurementId: "G-BNQ916JDZW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
