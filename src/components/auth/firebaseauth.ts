import React from "react";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBCvkBYmRdGSpcVOxDDMIWIaPSwSYioSo4",
  authDomain: "honalu-react.firebaseapp.com",
  projectId: "honalu-react",
  storageBucket: "honalu-react.firebasestorage.app",
  messagingSenderId: "704593316810",
  appId: "1:704593316810:web:03ad1fb5e7b37b43199d33",
};

// Initialize Firebase
const iApp = initializeApp(firebaseConfig);

export default iApp;
