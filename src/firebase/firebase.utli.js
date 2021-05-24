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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // console.log("userRef", userAuth);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
