// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0OfPU6mWEt2DbRtwf7P9Ov_eoIDjECAA",
  authDomain: "assignment-11-bookself.firebaseapp.com",
  projectId: "assignment-11-bookself",
  storageBucket: "assignment-11-bookself.firebasestorage.app",
  messagingSenderId: "542863164069",
  appId: "1:542863164069:web:10b275f77d913de7a4c34c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);