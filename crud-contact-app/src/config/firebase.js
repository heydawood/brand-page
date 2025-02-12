// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrMydNPHRv5XxWOwkdhkVVQJtpgvUpmEM",
  authDomain: "contact-app-b4761.firebaseapp.com",
  projectId: "contact-app-b4761",
  storageBucket: "contact-app-b4761.firebasestorage.app",
  messagingSenderId: "68057716243",
  appId: "1:68057716243:web:8bfffb8bfe193e9520d1e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);