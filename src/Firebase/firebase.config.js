// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwLxCG6xu7e-Psn9KTanCwYGKw2sVfpUs",
  authDomain: "health-care-with-react-8e5ba.firebaseapp.com",
  projectId: "health-care-with-react-8e5ba",
  storageBucket: "health-care-with-react-8e5ba.appspot.com",
  messagingSenderId: "883902745118",
  appId: "1:883902745118:web:20880333f0dec3de2a7c0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth
