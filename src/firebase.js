import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGZth53dAINogh6kVsugjaDVdORWoFYRM",
  authDomain: "temp-22acf.firebaseapp.com",
  databaseURL: "https://temp-22acf.firebaseio.com",
  projectId: "temp-22acf",
  storageBucket: "temp-22acf.appspot.com",
  messagingSenderId: "524784069472",
  appId: "1:524784069472:web:114e09cf17eb2e78054c05",
  measurementId: "G-7JQPJZE1L2",
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore();
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
