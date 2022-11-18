// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_AfbAYwgc5vqNBYtCYRw1cj7AFE6E5QI",
  authDomain: "dawn-33117.firebaseapp.com",
  projectId: "dawn-33117",
  storageBucket: "dawn-33117.appspot.com",
  messagingSenderId: "822156864184",
  appId: "1:822156864184:web:edd5fde7116e5af58fe24d",
  measurementId: "G-FFHP79KZPY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}


