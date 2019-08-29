import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const confing = {
  apiKey: "AIzaSyCZNgFRJeoFSHTN7IbrjvaB4gE8-xSdw9g",
  authDomain: "pxl-clothing-db.firebaseapp.com",
  databaseURL: "https://pxl-clothing-db.firebaseio.com",
  projectId: "pxl-clothing-db",
  storageBucket: "",
  messagingSenderId: "474750880231",
  appId: "1:474750880231:web:15ab727605ec3e6f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

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
    } catch (e) {
      console.log(`Error creating user`, e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(confing);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
