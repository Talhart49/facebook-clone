// import * as firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6XYwepIWZL0IEwHcrBWQW8mPipj2Avxo",
  authDomain: "facebook-clone-a983f.firebaseapp.com",
  projectId: "facebook-clone-a983f",
  storageBucket: "facebook-clone-a983f.appspot.com",
  messagingSenderId: "521960309096",
  appId: "1:521960309096:web:d6fbf40b8061bd67ab16dd",
  measurementId: "G-QE0L72F5DD",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;
