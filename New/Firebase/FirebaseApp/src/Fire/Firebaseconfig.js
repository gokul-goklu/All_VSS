
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "./firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR9LinH4BlWbmM6ZRo0iJxhE9qo8uoZjE",
  authDomain: "fireregister-4f67d.firebaseapp.com",
  projectId: "fireregister-4f67d",
  storageBucket: "fireregister-4f67d.appspot.com",
  messagingSenderId: "24908734457",
  appId: "1:24908734457:web:032af6004bf7562fbd2728"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database=getAuth(app);