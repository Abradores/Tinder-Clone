import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_9_5bKuoinQx625J1B5UNZzAz_8BosS4",
  authDomain: "tinder-clone-c862b.firebaseapp.com",
  databaseURL: "https://tinder-clone-c862b.firebaseio.com",
  projectId: "tinder-clone-c862b",
  storageBucket: "tinder-clone-c862b.appspot.com",
  messagingSenderId: "179531658968",
  appId: "1:179531658968:web:36d1c39bec5d8777e689ad",
  measurementId: "G-2Q3834FT9L",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
