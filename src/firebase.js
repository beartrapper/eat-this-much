import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATTTaM-TKWa7tf788KiLtYOsfFPn94t6k",
  authDomain: "unwanted-fats.firebaseapp.com",
  databaseURL: "https://unwanted-fats.firebaseio.com",
  projectId: "unwanted-fats",
  storageBucket: "unwanted-fats.appspot.com",
  messagingSenderId: "742805584753",
  appId: "1:742805584753:web:c10bbcb9d7984e53ecd4d0",
  measurementId: "G-05N5H3VG6H"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
