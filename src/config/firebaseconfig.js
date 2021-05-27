// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAK2FNGmhRy7GBxyn7WLLAvvvuBM-QsJ3A",
  authDomain: "incredible-f1210.firebaseapp.com",
  projectId: "incredible-f1210",
  storageBucket: "incredible-f1210.appspot.com",
  messagingSenderId: "669911320422",
  appId: "1:669911320422:web:e0075056afc145486e2aa7",
  measurementId: "G-XLMG9H6PFX"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();