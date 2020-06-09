import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlYDxvBuSCE38kfsVnGgzUTaMaWaKoXzk",
  authDomain: "anonibus-3842b.firebaseapp.com",
  databaseURL: "https://anonibus-3842b.firebaseio.com",
  projectId: "anonibus-3842b",
  storageBucket: "anonibus-3842b.appspot.com",
  messagingSenderId: "67355074230",
  appId: "1:67355074230:web:be782a6b16e9a37f0f9017",
  measurementId: "G-LX31GB254C"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();