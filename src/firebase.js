// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC56SbEyOk6r727xsX0fW_N-5AHneFQuGA",
  authDomain: "intkod-e247a.firebaseapp.com",
  projectId: "intkod-e247a",
  storageBucket: "intkod-e247a.appspot.com",
  messagingSenderId: "1065877445369",
  appId: "1:1065877445369:web:a0187bab8eea269b5fa028"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)