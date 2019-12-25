import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAMXWq5uOa-EK9NRYL8FpSOBrqjI3SfbO4",
  authDomain: "crwn-db-79768.firebaseapp.com",
  databaseURL: "https://crwn-db-79768.firebaseio.com",
  projectId: "crwn-db-79768",
  storageBucket: "crwn-db-79768.appspot.com",
  messagingSenderId: "836325467376",
  appId: "1:836325467376:web:6c06884e8e3610158f0e35",
  measurementId: "G-L6KJZ7WNNT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user, error.message");
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
