// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzt0FvENTAd73EBkntw_d2Dm5-lkj5lzU",
  authDomain: "socialize-384ee.firebaseapp.com",
  databaseURL: "https://socialize-384ee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "socialize-384ee",
  storageBucket: "socialize-384ee.appspot.com",
  messagingSenderId: "972216436775",
  appId: "1:972216436775:web:9f1fa76833740e59962602",
  measurementId: "G-9Q9T0WBG6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);