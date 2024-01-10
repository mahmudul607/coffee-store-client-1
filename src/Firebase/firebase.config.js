// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzrc6lUJqNw5CupOV2BbNbVwimEMkXs5Y",
  authDomain: "coffee-store-1a4e9.firebaseapp.com",
  projectId: "coffee-store-1a4e9",
  storageBucket: "coffee-store-1a4e9.appspot.com",
  messagingSenderId: "577523657470",
  appId: "1:577523657470:web:2394cf9049f5a33df613af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;