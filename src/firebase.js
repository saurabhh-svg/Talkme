import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB9-8_AReaPK_6lByaR2Izz5k1a8Ii8XBw",
  authDomain: "talk-me-8e24c.firebaseapp.com",
  projectId: "talk-me-8e24c",
  storageBucket: "talk-me-8e24c.appspot.com",
  messagingSenderId: "788646533223",
  appId: "1:788646533223:web:5dffb7efb0cce536fa1cc2",
  measurementId: "G-WZFNLWSGFM",
});

const db = firebaseApp.firestore();

export default db;
