// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWYSeFM8nrJZrqBHgRLczigxqhAjMtaJ4",
  authDomain: "mobileassignment2-a7881.firebaseapp.com",
  projectId: "mobileassignment2-a7881",
  storageBucket: "mobileassignment2-a7881.appspot.com",
  messagingSenderId: "147766720380",
  appId: "1:147766720380:web:8470ceead28f919ca216f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}