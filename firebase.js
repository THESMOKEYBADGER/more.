// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS2RAJanlflg5Xudy8VCFiUMAz1tpEKFw",
  authDomain: "more-f1579.firebaseapp.com",
  projectId: "more-f1579",
  storageBucket: "more-f1579.appspot.com",
  messagingSenderId: "675524787031",
  appId: "1:675524787031:web:e122a81b58e5154dd15c12",
  measurementId: "G-TJSHHBM91X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, storage };