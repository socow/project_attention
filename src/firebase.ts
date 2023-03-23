import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_CLIENT_ID,
  authDomain: "attention-8a4cb.firebaseapp.com",
  projectId: "attention-8a4cb",
  storageBucket: "attention-8a4cb.appspot.com",
  messagingSenderId: "945100486116",
  appId: "1:945100486116:web:17274c14233aaf4c3503f1",
  measurementId: "G-KT9ZSJG520",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };
