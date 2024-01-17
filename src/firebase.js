// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "e-commerce-f27a4.firebaseapp.com",
  projectId: "e-commerce-f27a4",
  storageBucket: "e-commerce-f27a4.appspot.com",
  messagingSenderId: "522984372378",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: "G-0JW6VRXRJY",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
