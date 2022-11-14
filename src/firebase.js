// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDZLk2KNghUPQmnbDSf0OV6qFym8Y85ZM",
  authDomain: "intkod123.firebaseapp.com",
  projectId: "intkod123",
  storageBucket: "intkod123.appspot.com",
  messagingSenderId: "383143459965",
  appId: "1:383143459965:web:bf7aed0c8f42199c864514"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)