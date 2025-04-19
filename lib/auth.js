"use server"

import { user } from "@nextui-org/theme";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD1S4coZdYCCiluUygi6KwEZsBi-Ju4EPY",
  authDomain: "askfay-8c7e3.firebaseapp.com",
  projectId: "askfay-8c7e3",
  storageBucket: "askfay-8c7e3.firebasestorage.app",
  messagingSenderId: "329535094345",
  appId: "1:329535094345:web:4ff3805d080c261df44998",
  measurementId: "G-2T2QT71DKQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// connectAuthEmulator(auth, "http://localhost:9099");

//LOGIN
const loginEmailandPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

//SIGNUP
const signupEmailandPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        const user = userCredential.user;
        console.log(user);
        return user
      } catch (error) {
        console.log(error);
        return error
      }
};

//LOGOUT
const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};


//AUTH STATE
const authState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(user);
      showApp()
      showLoginState(user)

      hideLoginError();
    } else {
      showLoginForm();
      hideLoginState();
      showLoginError();
    }
  })
}
  export { loginEmailandPassword, signupEmailandPassword, logout, authState };