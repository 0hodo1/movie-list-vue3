import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDT_IOl7D48K0ZIM-teqbS99llxWPDaKgE",
  authDomain: "vue3-firebase-projects-db91d.firebaseapp.com",
  projectId: "vue3-firebase-projects-db91d",
  storageBucket: "vue3-firebase-projects-db91d.appspot.com",
  messagingSenderId: "861702228438",
  appId: "1:861702228438:web:cbae94c5ef369217c07c77",
};

firebase.initializeApp(firebaseConfig);

const firestoreRef = firebase.firestore();
const authRef = firebase.auth();

const date = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, firestoreRef, authRef, date };
