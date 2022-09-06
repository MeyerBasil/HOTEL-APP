// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDsfwZDEdSvNcYUZeaoMhXun3w_s629eFw",
  authDomain: "hotel-app-5cd19.firebaseapp.com",
  projectId: "hotel-app-5cd19",
  storageBucket: "hotel-app-5cd19.appspot.com",
  messagingSenderId: "94283197940",
  appId: "1:94283197940:web:913776ae4809ad15e61da1",
  measurementId: "G-EZBDG9Q6NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export {auth, db};