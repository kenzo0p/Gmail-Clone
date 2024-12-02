import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh1Pq1IU8gd4F2UJhLLywX2D6ENq5YNjU",
  authDomain: "clone-92cae.firebaseapp.com",
  projectId: "clone-92cae",
  storageBucket: "clone-92cae.firebasestorage.app",
  messagingSenderId: "819470527730",
  appId: "1:819470527730:web:bb1af7b35ed9338ceb346b",
  measurementId: "G-KS6V6328YF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore();
export const provider = new GoogleAuthProvider();
