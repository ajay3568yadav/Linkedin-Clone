import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCcG3fnwWCLwqm08JSgbAhrvAlYooBauXk",
    authDomain: "linkedin-clone-b1fca.firebaseapp.com",
    projectId: "linkedin-clone-b1fca",
    storageBucket: "linkedin-clone-b1fca.appspot.com",
    messagingSenderId: "770021529790",
    appId: "1:770021529790:web:05fc28fcebf50129c5e6ef",
    measurementId: "G-HLPHQ62SRN"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };