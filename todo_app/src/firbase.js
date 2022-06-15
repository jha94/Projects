// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD7tHiINqBN6ipTRekh8bAjXvSNTsZj3cw",
    authDomain: "todo-app-cp-1dcc2.firebaseapp.com",
    projectId: "todo-app-cp-1dcc2",
    storageBucket: "todo-app-cp-1dcc2.appspot.com",
    messagingSenderId: "919539886447",
    appId: "1:919539886447:web:f7bfad9d23cde76ff6209a",
    measurementId: "G-C48FKPVW0S"
  })

  const db = firebaseApp.firestore();
  export {db}