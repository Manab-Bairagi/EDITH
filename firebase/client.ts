
import { initializeApp,getApps,getApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCY0o3eXZWE17MYD0Z5K0xQsODocoI4Sg",
  authDomain: "edith-486d4.firebaseapp.com",
  projectId: "edith-486d4",
  storageBucket: "edith-486d4.firebasestorage.app",
  messagingSenderId: "986265884651",
  appId: "1:986265884651:web:6ac2a929ad835251712bae",
  measurementId: "G-QRN0L3J8ZE"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);