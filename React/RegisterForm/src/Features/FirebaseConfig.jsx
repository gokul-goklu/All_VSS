import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6-6CoudeA7-xk6ozFWDHiWT5ZjqXBtWw",
  authDomain: "registerationform-e4202.firebaseapp.com",
  projectId: "registerationform-e4202",
  storageBucket: "registerationform-e4202.appspot.com",
  messagingSenderId: "493549767570",
  appId: "1:493549767570:web:90abef1094b58a73960f4b",
  measurementId: "G-9P4LB5M5LQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const Database=getAuth(app)
