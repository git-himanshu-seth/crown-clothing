import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA0IYehME3Ji0-uBLJdglDFZC-seGnKVcc",
  authDomain: "crown-db-49560.firebaseapp.com",
  projectId: "crown-db-49560",
  storageBucket: "crown-db-49560.appspot.com",
  messagingSenderId: "3263406800",
  appId: "1:3263406800:web:26edf2e7e87bf868fb34d5",
  measurementId: "G-7H5H0N5RK6"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
