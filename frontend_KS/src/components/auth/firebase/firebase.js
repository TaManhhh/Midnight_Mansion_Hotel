import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyC7cOfHAwwFbVemicl3qsJjU8S8fU0YuZA",
      authDomain: "webkhachsan-app.firebaseapp.com",
      projectId: "webkhachsan-app",
      storageBucket: "webkhachsan-app.appspot.com",
      messagingSenderId: "399180296708",
      appId: "1:399180296708:web:f22ea1b39eae1324727b51",
      measurementId: "G-NJWP1XTT9B"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signup(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function signin(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
    return signOut(auth)
}

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub
  });

  return currentUser;
}
