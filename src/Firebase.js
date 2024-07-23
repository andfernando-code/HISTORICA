// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your Firebase configuration
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

// Initialize Firestore and Storage
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, storage, ref, uploadBytes, getDownloadURL, collection, addDoc };
