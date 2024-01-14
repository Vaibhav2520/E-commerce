// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyD0vNn31UzuOMZDTxGj1ARJlY0bih-T8zo",
  authDomain: "e-commerce-f27a4.firebaseapp.com",
  projectId: "e-commerce-f27a4",
  storageBucket: "e-commerce-f27a4.appspot.com",
  messagingSenderId: "522984372378",
  appId: "1:522984372378:web:aec1cec3ca8bd915f1c723",
  measurementId: "G-0JW6VRXRJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
