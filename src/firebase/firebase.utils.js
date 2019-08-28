import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const cofing = {
  apiKey: "AIzaSyCZNgFRJeoFSHTN7IbrjvaB4gE8-xSdw9g",
  authDomain: "pxl-clothing-db.firebaseapp.com",
  databaseURL: "https://pxl-clothing-db.firebaseio.com",
  projectId: "pxl-clothing-db",
  storageBucket: "",
  messagingSenderId: "474750880231",
  appId: "1:474750880231:web:15ab727605ec3e6f"
};

firebase.initializeApp(cofing);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
