// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7ygjGXrh22R-ACUuIyXqW9a13WMg_AlE",
  authDomain: "betterbetter-odds.firebaseapp.com",
  projectId: "betterbetter-odds",
  storageBucket: "betterbetter-odds.appspot.com",
  messagingSenderId: "933134229209",
  appId: "1:933134229209:web:64407976a294b0b51ee8c8",
  measurementId: "G-KDXHFJX3QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);