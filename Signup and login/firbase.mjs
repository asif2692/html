// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-Firestore.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxaRYTRw0IQmlpPlaSGzsddwV2aMH2I3s",
  authDomain: "webandapp-660fc.firebaseapp.com",
  projectId: "webandapp-660fc",
  storageBucket: "webandapp-660fc.appspot.com",
  messagingSenderId: "577655287374",
  appId: "1:577655287374:web:6f4e6eb2cd466efdb51d1f",
  measurementId: "G-YTNNJ6P6J5"
};

// Initialize Firebase
   export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);



