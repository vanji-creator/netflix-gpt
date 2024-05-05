// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa1kAMdk4MjLJRJ_pMipN8QbXnBU1RuJU",
  authDomain: "netflixgpt-66d08.firebaseapp.com",
  projectId: "netflixgpt-66d08",
  storageBucket: "netflixgpt-66d08.appspot.com",
  messagingSenderId: "8867315062",
  appId: "1:8867315062:web:130d00dd6d8f3ba9c88e57",
  measurementId: "G-59LCXGTQF2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
