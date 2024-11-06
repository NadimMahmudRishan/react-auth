// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6Rfn3Zg6bclODgrLKajfxbmdEw67BzP0",
  authDomain: "react-auth00.firebaseapp.com",
  projectId: "react-auth00",
  storageBucket: "react-auth00.firebasestorage.app",
  messagingSenderId: "1085717549379",
  appId: "1:1085717549379:web:df57254f1771aaef50dff6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
