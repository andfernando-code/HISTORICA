// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAKkw5nSujFUKes8nVF3j8aqtXYAj3cfE",
  authDomain: "historica-40e1e.firebaseapp.com",
  projectId: "historica-40e1e",
  storageBucket: "historica-40e1e.appspot.com",
  messagingSenderId: "1022644903834",
  appId: "1:1022644903834:web:9c9aaaf6f342931c466423",
  measurementId: "G-JQKK58QYSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);