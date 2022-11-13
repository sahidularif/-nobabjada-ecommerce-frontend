// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {FacebookAuthProvider, getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyDqOzlZV8npV3M6rA27yECfNlRiIYctX3s",
  authDomain: "nobab-3b3c4.firebaseapp.com",
  projectId: "nobab-3b3c4",
  storageBucket: "nobab-3b3c4.appspot.com",
  messagingSenderId: "385105166132",
  appId: "1:385105166132:web:f4cf163c50fd768fd5af61"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const facebookProvider = new FacebookAuthProvider()